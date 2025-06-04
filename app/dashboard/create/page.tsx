import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreateBlog = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input />
            </div>
            <div className="flex flex-col gap-2 my-3">
              <Label>Content</Label>
              <Textarea></Textarea>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlog;
