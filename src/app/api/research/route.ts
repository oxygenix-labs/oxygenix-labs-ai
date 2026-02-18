import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { crop, trait, environment } = await request.json();

    // Simulate AI Processing Delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Generate Mock Structured Response
    const mockResponse = {
        id: `RES-${Math.floor(Math.random() * 10000)}`,
        confidence: 89 + Math.floor(Math.random() * 10),
        predictions: [
            {
                label: `High ${trait} potential`,
                probability: 92,
                description: `Genetic markers indicate strong potential for ${trait} in ${environment} conditions.`
            },
            {
                label: "Yield Stability",
                probability: 85,
                description: "Predicted yield stability remains within top 15% percentile."
            },
            {
                label: "Resource Efficiency",
                probability: 78,
                description: "Estimated 12% reduction in water usage required."
            }
        ],
        markers: [
            "LOC_Os01g12340: Promoter Region",
            "LOC_Os03g45670: Coding Sequence",
            "LOC_Os05g78900: Intron Variant",
            "LOC_Os02g11111: 3' UTR",
            "LOC_Os09g22222: Enhancer",
        ],
        rawData: {
            crop,
            trait,
            environment,
            timestamp: new Date().toISOString(),
            engine_version: "v2.4.1-alpha",
            compute_time: "2.3s"
        }
    };

    return NextResponse.json(mockResponse);
}
