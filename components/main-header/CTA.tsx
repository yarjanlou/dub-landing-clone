import LoginButton from "../ui/LoginButton";
import PrimaryButton from "../ui/PrimaryButton";

export default function CTA() {
  return (
    <div className="flex grow basis-0 items-center justify-end gap-2">
      <LoginButton>Log in</LoginButton>
      <PrimaryButton customStyle="h-8 px-4">Sign Up</PrimaryButton>
    </div>
  );
}
