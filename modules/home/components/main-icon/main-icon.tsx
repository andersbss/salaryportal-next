import Image from 'next/image';

export const MainIcon = (): JSX.Element => {
  return (
    <>
      <Image height={300} width={300} src="/savings-icon.svg" alt="home page logo" priority={false} />
    </>
  );
};
