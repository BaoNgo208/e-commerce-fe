import { FaTimes } from "react-icons/fa";

interface Props {
  setShowBanner: (value: boolean) => void;
}

const AnnouncementBar = ({ setShowBanner }: Props) => {
  return (
    <div className="bg-black text-white text-[0.75rem] lg:text-sm py-1 px-4 flex items-center justify-center relative">
      <span>
        Sign up and get&nbsp;
        <strong>20% off</strong>&nbsp;your first order:&nbsp;
        <a href="/sign-in" className="underline font-medium">
          Sign Up Now
        </a>
      </span>

      <button
        onClick={() => setShowBanner(false)}
        aria-label="Close banner"
        className="absolute right-4 top-1/2 -translate-y-1/2"
      >
        <FaTimes size={12} />
      </button>
    </div>
  );
};

export default AnnouncementBar;
