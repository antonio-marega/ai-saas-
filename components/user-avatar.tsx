import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define the extended user type if profileImageUrl is missing
interface ExtendedUser {
  profileImageUrl?: string;
  firstName?: string;
  lastName?: string;
}

export const UserAvatar = () => {
  const { user } = useUser();

  // Type assertion to handle the extended properties
  const extendedUser = user as ExtendedUser;

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={extendedUser?.profileImageUrl || "/default-avatar.png"} alt={`${extendedUser?.firstName} ${extendedUser?.lastName}`} />
      <AvatarFallback>
        {extendedUser?.firstName?.charAt(0) || "U"}
        {extendedUser?.lastName?.charAt(0) || "A"}
      </AvatarFallback>
    </Avatar>
  );
};
