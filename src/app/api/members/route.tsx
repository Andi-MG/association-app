import { NextRequest, NextResponse } from 'next/server';

type ResponseData = {
    description: string
}
export async function GET(request: NextRequest): Promise<NextResponse<ResponseData>> {
    if (request.method !== 'GET') {
        return NextResponse.json({ description: 'Method not allowed' }, { status: 405 });
    }
    return NextResponse.json({ description: 'Work in progress' });
}