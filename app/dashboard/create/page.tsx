import { handleSubmission } from "@/app/actions";
import { Button } from "@/components/ui/button";
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
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input type="text" name="title" placeholder="Title" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea
                className="resize-none"
                name="content"
                placeholder="Content"
                required
              ></Textarea>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input type="text" name="imageUrl" placeholder="Image Url" required />
            </div>
            <Button className="cursor-pointer">Create Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlog;
