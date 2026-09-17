import { useState } from 'react'
import Swal from 'sweetalert2';
import events from '../lib/analytics';

// Same origin: the endpoint is a Vercel function beside the site, so there is
// no cross-origin request and no cold-started third-party service in the path.
const API_URL = '/api/send-email';

const EMPTY_FORM = { name: '', email: '', message: '', hp_reference: '' };

const direct = [
  { label: 'Email', value: 'naumanahmed449@gmail.com', href: 'mailto:naumanahmed449@gmail.com' },
  { label: 'Phone', value: '+49 152 288 35221', href: 'tel:+4915228835221' },
  { label: 'GitHub', value: 'nauman-ahmed', href: 'https://github.com/nauman-ahmed' },
  { label: 'LinkedIn', value: 'nauman-ahmed', href: 'https://www.linkedin.com/in/nauman-ahmed-b190b219a/' },
];

export default function Contact() {
    const [form, setForm] = useState(EMPTY_FORM);
    const [sending, setSending] = useState(false);

    const [startedTracked, setStartedTracked] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        // Fires once, on the first keystroke — the gap between this and
        // contact_form_sent is the form's abandonment rate.
        if (!startedTracked) {
            events.contactStarted();
            setStartedTracked(true);
        }
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (sending) return;

        setSending(true);
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            // The API answers JSON on every path, including 400/403/413/429,
            // and its message is more useful than a generic failure string.
            const data = await response.json().catch(() => null);

            if (!response.ok || data?.success !== true) {
                throw new Error(
                    data?.message || `Request failed with status ${response.status}`
                );
            }

            setForm(EMPTY_FORM);
            events.contactSent();
            Swal.fire({
                icon: 'success',
                title: 'Message sent!',
                text: 'Thanks for reaching out — I will get back to you soon.',
            });
        } catch (error) {
            console.error('Contact form submission failed:', error);
            events.contactFailed(error.message);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: `${error.message} You can also email me directly at naumanahmed449@gmail.com.`,
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="work__inner">
                <header className="sec-head" data-reveal>
                    <span className="sec-head__num">06</span>
                    <div>
                        <h2 className="sec-head__title">Get in touch</h2>
                        <p className="sec-head__note">
                            Open to Applied AI Engineer roles in Munich and remote.
                        </p>
                    </div>
                </header>

                <div className="contact__grid">
                    <div className="contact__direct">
                        <p className="contact__pitch">
                            If you are building AI systems that need to work in production &mdash; not
                            just demo well &mdash; I would like to hear about it.
                        </p>

                        <dl className="dlist">
                            {direct.map((d) => (
                                <div className="dlist__row" key={d.label}>
                                    <dt>{d.label}</dt>
                                    <dd>
                                        <a
                                            href={d.href}
                                            target={d.href.startsWith('http') ? '_blank' : undefined}
                                            rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        >
                                            {d.value}
                                        </a>
                                    </dd>
                                </div>
                            ))}
                            <div className="dlist__row">
                                <dt>Based in</dt>
                                <dd><span className="dlist__plain">Munich, Germany</span></dd>
                            </div>
                        </dl>
                    </div>

                    <form className="cform" id="contact-form" onSubmit={handleSubmit}>
                        <div className="cform__row">
                            <label className="field">
                                <span className="field__label">Your name</span>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    disabled={sending}
                                    required
                                />
                            </label>

                            <label className="field">
                                <span className="field__label">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    disabled={sending}
                                    required
                                />
                            </label>
                        </div>

                        {/* Honeypot. The name must stay meaningless: anything like
                            "company" or "organization" gets filled by browser address
                            autofill, which would silently discard a real message. */}
                        <div className="hp" aria-hidden="true">
                            <input
                                type="text"
                                id="hp_reference"
                                name="hp_reference"
                                tabIndex={-1}
                                autoComplete="off"
                                value={form.hp_reference}
                                onChange={handleChange}
                            />
                        </div>

                        <label className="field">
                            <span className="field__label">Message</span>
                            <textarea
                                name="message"
                                id="message"
                                rows="6"
                                value={form.message}
                                onChange={handleChange}
                                disabled={sending}
                                required
                            />
                        </label>

                        <div className="cform__send">
                            <button type="submit" className="btn-signal cform__submit" disabled={sending}>
                                {sending ? 'Sending…' : 'Send message'}
                            </button>
                            {/* Removes the "will this go into a void?" hesitation, which is
                                the most common reason a filled-in form never gets sent. */}
                            <span className="cform__promise">I reply within one working day.</span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
