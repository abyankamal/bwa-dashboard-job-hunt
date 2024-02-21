import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator";
import { PartyPopperIcon } from "lucide-react";
import { FC } from "react";

interface JobDetailProps{}

const JobDetail : FC<JobDetailProps> = ({}) => {
    return(
        <div>
            <div className="grid grid-cols-3 w-full grid-5">
                <div className="col-span-2 space-y-10">
                    <div>
                        <div className="text-3xl font-semibold">
                            Description
                        </div>
                        <div className="text-gray-500 mt-3">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra varius nisl et imperdiet. Ut sed nulla hendrerit, bibendum lectus non, posuere justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mollis mollis lacus in eleifend.
                            </p>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <div className="text-3xl font-semibold">
                            Responsibilites
                        </div>
                        <div className="text-gray-500 mt-3">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra varius nisl et imperdiet. Ut sed nulla hendrerit, bibendum lectus non, posuere justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mollis mollis lacus in eleifend.
                            </p>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <div className="text-3xl font-semibold">
                            Who You Ares
                        </div>
                        <div className="text-gray-500 mt-3">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra varius nisl et imperdiet. Ut sed nulla hendrerit, bibendum lectus non, posuere justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mollis mollis lacus in eleifend.
                            </p>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <div className="text-3xl font-semibold">
                            Nice-To-Haves
                        </div>
                        <div className="text-gray-500 mt-3">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra varius nisl et imperdiet. Ut sed nulla hendrerit, bibendum lectus non, posuere justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mollis mollis lacus in eleifend.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-3xl font-semibold">
                        About This Role
                    </div>

                    <div className="shadow p-3 text-center mt-6">
                        1 <span className="text-gray-500">of 10 capacity</span>
                        <Progress className="mt-3" value={10}/>
                    </div>

                    <div className="mb-10 space-y-5 my-6">
                        <div className="flex justify-between">
                            <div className="text-gray-500">Apply Before</div>
                            <div className="font-semibold">12 Aug 2023</div>
                        </div>

                        <div className="flex justify-between">
                            <div className="text-gray-500">Job Posted On</div>
                            <div className="font-semibold">12 Aug 2023</div>
                        </div>

                        <div className="flex justify-between">
                            <div className="text-gray-500">Job Type</div>
                            <div className="font-semibold">Full Time</div>
                        </div>

                        <div className="flex justify-between">
                            <div className="text-gray-500">Salary</div>
                            <div className="font-semibold">$100 - $1000</div>
                        </div>
                    </div>

                    <Separator />

                    <div className="my-10">
                        <div className="text-3xl font-semibold mb-4">
                            Category
                        </div>

                        <div className="space-x-5">
                            <Badge>Design</Badge>
                        </div>
                    </div>

                    <Separator />

                    <div className="my-10">
                        <div className="text-3xl font-semibold mb-4">
                            Required Skill
                        </div>

                        <div className="space-x-5">
                            {["HTML", "JavaScript"].map((item: any, i: number) => (
                                <Badge variant={"outline"} key={i}>{item}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="my-8" />

            <div>
                <div className="text-3xl font-semibold">Perks & Benefits</div>
                <div className="text-gray-500">
					This job comes with several perks and benefits
				</div>
            </div>

            <div className="grid grid-cols-4 gap-5 mt-9">
					{[0,1,2]?.map((item: any) => (
						<div key={item}>
							<PartyPopperIcon className="w-10 h-10 text-primary mb-6" />

							<div className="text-lg font-semibold mb-3">
								Lorem Ipsum Dolor Sit Amet
							</div>
							<div className="text-gray-500">
								{item.description}
							</div>
						</div>
					))}
			</div>
        </div>
    );
}

export default JobDetail;