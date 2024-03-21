import { UI } from '@/types/ui';

export default function Navbar({ ctas }: { ctas: UI.Cta[] }) {
    const validCtas = ctas.filter((cta) => cta.href && cta.text);
    return (
        <nav className="flex justify-center gap-6 pt-4 bg-white z-index-50 md:relative md:justify-normal md:gap-12 md:pt-6 md:pb-2 md:px-6">
            {validCtas.map((cta, index) => {
                return (
                    <a className="md:text-2xl" key={index} href={cta.href}>
                        {cta.text}
                    </a>
                );
            })}
        </nav>
    );
}
