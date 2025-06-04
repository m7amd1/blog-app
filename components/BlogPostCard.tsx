import Image from "next/image";
import Link from "next/link";

interface IappPorps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const BlogPostCard = ({ data }: IappPorps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg border border-gray-200 shadow-md transition-all bg-white hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 overflow-hidden w-full">
          <Image
            src={data.imageUrl}
            alt="image Post"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-500">
            {data.title}
          </h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {data.content}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden">
                <Image
                  src={data.authorImage}
                  alt="Author Image"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">
                {data.authorName}
              </p>
            </div>
            <time className="text-xs text-gray-500">
              {/* Date Format  */}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(data.createdAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
