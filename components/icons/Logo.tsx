'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Logo = () => {
  const { theme } = useTheme();
  const logoPath = theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg';

  return (
    <Image src={logoPath} alt="Logo" width={80} height={80}/>
  );
};

export default Logo;

