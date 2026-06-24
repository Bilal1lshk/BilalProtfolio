import localsekuya from "next/font/local";
const fontsekuya = localsekuya({
  src:"./font/Sekuya-Regular.ttf",
});
import Loader from "./-components/Loader.jsx";
export default function Home() {
  return (
    <div className={`h-auto ${fontsekuya.className}  w-full`}>
      <Loader />
    </div>
  );
}
