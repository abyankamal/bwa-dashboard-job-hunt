import { jobFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react"
import { useForm } from "react-hook-form";
import { z } from "zod";

interface PageJobPostProps {

}

const PostJobPage : FC<PageJobPostProps> = ({}) => {
    const form = useForm<z.infer<typeof jobFormSchema>>({
        resolver: zodResolver(jobFormSchema),
        defaultValues: {
            requiredSkills: [],
        }
    });

    const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
        console.log(val);
    }
    return (
        <div>Post Job Page</div>
    );
}

export default PostJobPage;