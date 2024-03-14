import IconCta from '@/components/IconCta';
import { UI } from '@/types/ui';

export default function Footer({ ctas }: { ctas: UI.MediaIcon[] }) {
    return (
        <footer className="absolute bottom-0 w-screen shadow-[rgba(0,_0,_0,_0.1)_0px_-5px_40px_-7px] z-20">
            <div className="flex gap-4 p-8 justify-center">
                {ctas.map((cta, index) => {
                    return (
                        <IconCta
                            alt={cta.alt}
                            href={cta.href}
                            key={index}
                            media={cta.media}
                        />
                    );
                })}
            </div>
        </footer>
    );
}
