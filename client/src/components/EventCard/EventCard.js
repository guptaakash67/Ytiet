"use client"
import Link from "next/link";
import React, { useState } from "react";
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';
import { useAuth } from "@/context/auth";
import ThreeDot from "./ThreeDot";

export default function EventCard({ data }) {
	const [ReadMore, setReadMore] = useState(false);
	const { authUser, IsLoading, setAuthUser } = useAuth();

	// Safe check for details field
	const details = data.details || "No details available";

	return (
		<>
			{/* Card */}
			<AnimatedElement>
				<div className="rounded-lg min-h-96">
					<img 
						className="md:h-48 h-40 w-full rounded-lg object-cover object-center" 
						src={data.posterURL || '/path/to/fallback-image.jpg'} 
						alt={data.title || "Event Poster"} 
					/>
					<div className="p-2">
						<h1 className="title-font text-lg font-bold text-gray-900 mb-3">{data.title}</h1>
						<p className="leading-relaxed text-sm sm:text-lg mb-3 text-gray-700">
							{ReadMore ? details : details.substring(0, 100) + (details.length > 100 ? "..." : "")}
						</p>
						<div className="flex justify-between">
							{details.length > 100 && (
								<div className="flex items-center flex-wrap">
									<button 
										onClick={() => setReadMore(prev => !prev)} 
										className="text-indigo-800 font-bold inline-flex items-center px-2 py-1 hover:underline">
										{ReadMore ? "Read Less" : "Read More..."}
									</button>
								</div>
							)}
							<ThreeDot id={data._id} />
						</div>
					</div>
				</div>
			</AnimatedElement>
		</>
	);
}
