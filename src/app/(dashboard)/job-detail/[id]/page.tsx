import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type paramsType = {
	id: string;
};
interface JobDetailPageProps {
	params: paramsType;
}

const JobDetailPage: FC<JobDetailPageProps> = ({ params }) => {
	return (
		<div>
			<div className="inline-flex items-center gap-5 mb-5">
				<div>
					<Link href={"/job-listings"}>
						<ArrowLeftIcon className="w-9 h-9" />
					</Link>
				</div>
				<div>
					<div className="text-2xl font-semibold mb-1">
						Brand Designer
					</div>
					<div>Design . Full Time . 1/10 Hired</div>
				</div>
			</div>

			<Tabs defaultValue="applicants">
				<TabsList className="mb-8">
					<TabsTrigger value="applicants">Applicants</TabsTrigger>
                    <TabsTrigger value="jobdetails">Job Details</TabsTrigger>
				</TabsList>
				<TabsContent value="applicants">
                    <Applicants />
                </TabsContent>
				<TabsContent value="jobdetails">
                    <JobDetail />
                </TabsContent>
			</Tabs>
		</div>
	);
};

export default JobDetailPage;
