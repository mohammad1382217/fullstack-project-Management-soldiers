import { H1Title } from "./Layout";
import { useSelector } from "react-redux";

export const LoginNavbar = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <nav
      className={`w-full h-auto flex flex-wrap items-center justify-center bg-${theme} p-4`}
    >
      <H1Title
        H1class={
          "font-bold sm:text-xl max-[360px]:text-sm text-center text-black"
        }
        BoldTitle="گروهان قرارگاه پادگان مالک اشتر"
      />
    </nav>
  );
};
