import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import { UI } from '@/types/ui';

const Icon = (cta: UI.SocialMedias) => {
    switch (cta) {
        case 'Github':
            return <FaGithub className="relative w-full h-full" />;
        case 'LinkedIn':
            return <FaLinkedin className="relative w-full h-full" />;
        case 'Twitter':
            return <FaXTwitter className="relative w-full h-full" />;
    }
};

export default function Footer({ ctas }: { ctas: UI.MediaIcon[] }) {
    return (
        <footer className="absolute bottom-0 w-screen shadow-[rgba(0,_0,_0,_0.1)_0px_-5px_40px_-7px] z-20">
            <div className="flex gap-4 p-8 justify-center">
                {ctas.map((cta, index) => {
                    return (
                        <a
                            href={cta.href}
                            title={cta.alt}
                            className="aspect-square w-6"
                            key={index}
                        >
                            {Icon(cta.media)}
                        </a>
                    );
                })}
            </div>
        </footer>
    );
}
