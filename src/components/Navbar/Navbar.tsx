import { UI } from '@/types/ui';

export default function Navbar({ ctas }: { ctas: UI.Cta[] }) {
    const validCtas = ctas.filter((cta) => cta.href && cta.text);
    return (
        <nav className="flex gap-12 pt-6 pb-2 px-6">
            {validCtas.map((cta, index) => {
                return (
                    <a className="text-2xl" key={index} href={cta.href}>
                        {cta.text}
                    </a>
                );
            })}
        </nav>
    );
}
