import Image from "next/image";
import { Github, Linkedin, Twitter } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";
import { WakaTimeStatus } from "./WakaTimeStatus";
import { Cinzel } from "next/font/google";


const cinzel = Cinzel({ subsets: ["latin"] });

export function Header() {
  return (
    <header className="relative mb-4">

      {/* BANNER SECTION */}
      <div className="-mx-8 md:-mx-12 h-36 sm:h-44 overflow-hidden relative border-y theme-border-secondary">
        <Image
          src="/banner.webp"
          alt="Profile Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 theme-banner-overlay"></div>
      </div>

      {/* PROFILE INFO SECTION */}
      <div className="relative w-full">

        {/* Avatar, Name, and Socials container */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 relative z-10">

          <div className="flex flex-col gap-4">
            {/* Profile Avatar */}
            <div className="relative shrink-0 w-20 h-20 sm:w-28 sm:h-28 -mt-5 sm:-mt-7 group cursor-pointer focus:outline-none" tabIndex={0}>
              <div className="relative border-2 theme-profile-ring rounded-full overflow-hidden w-full h-full theme-profile-bg shadow-lg">
                <Image
                  src="/profile.webp"
                  alt="Irfan Ansari"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Dynamic WakaTime Status Indicator */}
              <WakaTimeStatus />
            </div>

            {/* Name + Role */}
            <div className="space-y-1">
              <h1 className={`text-3xl md:text-4xl font-bold shimmer-text tracking-tight ${cinzel.className}`}>
                Irfan Ansari
              </h1>
              <p className="theme-text-muted text-sm md:text-base tracking-wide uppercase font-medium">
                code&middot; Engineer
              </p>
            </div>
          </div>

          {/* Social Links + Theme Toggle — glass style */}
          <div className="flex items-center gap-2 self-start sm:self-end w-full sm:w-auto justify-end sm:justify-start translate-y-2 sm:translate-y-1">
            <SocialLink href="https://github.com" icon={<Github size={14} />} label="GitHub" />
            <SocialLink href="https://twitter.com" icon={<Twitter size={14} />} label="Twitter" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={14} />} label="LinkedIn" />
            <ThemeToggle />
          </div>

        </div>

      </div>

      {/* Gradient Divider */}
      <div className="-mx-8 md:-mx-12 mt-6 h-[1px] theme-divider" />


    </header>
  );
}


function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border theme-social bg-transparent transition-all duration-300"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
    </a>
  );
}