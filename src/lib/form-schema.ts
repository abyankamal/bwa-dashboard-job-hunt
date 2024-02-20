import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
    roles: z.string({ required_error: "Job Title Is Required"}).min(3, {message: "Job Title Must Be 3 Characters"}),
    jobType: z.enum(JOBTYPES, {
        required_error: "You Need To Choose Job Type",
    }),
    salaryFrom: z.string({ required_error: "Salary From Is Required"}),
    salaryTo: z.string({ required_error: "Salary To Is Required"}),
    categoryId: z.string({ required_error: "You need select a category" }),
    requiredSkills: z.string().array().nonempty({message: "Required Skill must be at least 1 skills"}),
    jobDescription: z.string({ required_error: "Job Description Is Required"}).min(10, {message: "Job Description Must Be 10 Characters"}),
    responsibility: z.string({ required_error: "Job Description Is Required"}).min(10, {message: "Job Description Must Be 10 Characters"}),
    whoYouAre: z.string({ required_error: "Job Description Is Required"}).min(10, {message: "Job Description Must Be 10 Characters"}),
    niceToHaves: z.string({ required_error: "Job Description Is Required"}).min(10, {message: "Job Description Must Be 10 Characters"}),
    benefits: z.object({
        benefit: z.string(),
        description: z.string()
    }).array().nonempty({ message: "Benefits must be at least 1 benefit"})
})