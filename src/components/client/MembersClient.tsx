"use client";
import { useEffect, useState } from 'react';

interface Member {
    description: string;
}

export default function MembersClient() {
    const [member, setMember] = useState<Member | null>(null);

    useEffect(() => {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}/api/members`);
                const result = await response.json();
                setMember(result);
            } catch (error) {
                console.error('Error fetching member data:', error);
            }
        };

        fetchData().catch(error => console.error('Error in fetchData:', error));
    }, []);

    if (!member) {
        return <span className="loading loading-bars loading-xl"></span>
    }

    return (
        <div className="text-center py-8 px-8">
            <div>{member.description}</div>
        </div>
    );
}