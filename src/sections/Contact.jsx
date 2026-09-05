import { useState } from 'react'
import Swal from 'sweetalert2';

const API_URL = 'https://portfolio-website-bfq5.onrender.com/api/send-email';

const EMPTY_FORM = { name: '', email: '', message: '' };

const direct = [
  { label: 'Email', value: 'naumanahmed449@gmail.com', href: 'mailto:naumanahmed449@gmail.com' },
  { label: 'Phone', value: '+49 152 288 35221', href: 'tel:+4915228835221' },
  { label: 'GitHub', value: 'nauman-ahmed', href: 'https://github.com/nauman-ahmed' },
  { label: 'LinkedIn', value: 'nauman-ahmed', href: 'https://www.linkedin.com/in/nauman-ahmed-b190b219a/' },
];

export default function Contact() {
    const [form, setForm] = useState(EMPTY_FORM);
    const [sending, setSending] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
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
            Swal.fire({
                icon: 'success',
                title: 'Message sent!',
                text: 'Thanks for reaching out — I will get back to you soon.',
            });
        } catch (error) {
            console.error('Contact form submission failed:', error);
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
                    <span className="sec-head__num">05</span>
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

                        <button type="submit" className="btn-signal cform__submit" disabled={sending}>
                            {sending ? 'Sending…' : 'Send message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
