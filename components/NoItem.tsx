import Image from "next/image";
import { useRouter } from "next/navigation";

interface NoCoursesProps {
  message?: string;
  showClearButton?: boolean;
  onClearSearch?: () => void;
  title?: string;
  actionLabel?: string;
  action?: () => void;
}

const NoCourses = ({
  message = "No courses available",
  showClearButton = false,
  onClearSearch,
  title,
  actionLabel = "New",
  action,
}: NoCoursesProps) => {
  const defaultMessage = title
    ? `We couldn't find any courses matching "${title}". Try adjusting your search terms.`
    : "There are currently no courses available. Check back later for new content!";

  const displayMessage = message || defaultMessage;
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center my-16 text-center">
      <div className="w-40 h-40 mb-6">
        <Image
          src="/course_1.png"
          alt="No courses"
          width={200}
          height={200}
          className="opacity-50"
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
        {title ? title : "No courses available"}
      </h3>

      <p className="text-gray-500 mb-6 max-w-md">{displayMessage}</p>
      {!showClearButton && (
        <button
          // onClick={onClearSearch}
          className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg transition-colors"
          onClick={() => action()}
        >
          {actionLabel}
        </button>
      )}
      {showClearButton && onClearSearch && (
        <button
          onClick={onClearSearch}
          className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg transition-colors"
        >
          Clear Search
        </button>
      )}
    </div>
  );
};

export default NoCourses;
