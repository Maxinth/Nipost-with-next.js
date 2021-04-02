import HomePage from "../components/HomePageComponents/index";
import TransitionBox from "../components/TransitionBox";

export default function Home() {
  return (
    <TransitionBox docTitle="Nipost -- Home">
      <HomePage />
    </TransitionBox>
  );
}
