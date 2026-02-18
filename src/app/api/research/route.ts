import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { crop, trait, environment } = await request.json();

    // Simulate AI Processing Delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Generate Mock Structured Response
    const mockResponse = {
        id: `RES-${Math.floor(Math.random() * 10000)}`,
        candidateGenes: [
            { id: "LOC_Os01g12340", name: "DREB1A", confidence: 95 },
            { id: "LOC_Os05g78900", name: "NAC", confidence: 88 },
            { id: "LOC_Os03g45670", name: "MYB", confidence: 82 },
        ],
        geneFunctions: `The identified genes are primarily involved in stress response pathways. DREB1A is a transcription factor that regulates the expression of cold- and dehydration-responsive genes. NAC and MYB families are also critical in mediating drought tolerance through stomatal closure and root architecture modification.`,
        literature: [
            { title: "Overexpression of DREB1A improves drought tolerance in transgenic wheat", authors: "Pellegrineschi et al.", year: "2004" },
            { title: "NAC transcription factors in plant abiotic stress responses", authors: "Nakashima et al.", year: "2012" },
        ],
        editingStrategy: `Target the promoter region of DREB1A to enhance its expression under drought conditions. Alternatively, use CRISPR-Cas9 to knock out negative regulators of the stress response pathway. Ensure off-target effects are minimized by selecting high-specificity gRNAs.`,
        guides: [
            "GCTAGCTAGctagCTAG",
            "ATCGATCGatcgATCG",
            "TGCATGCAgcaIGCAT"
        ],
        protocol: {
            steps: [
                "Design and synthesize gRNAs targeting the DREB1A promoter.",
                "Clone gRNAs into the binary vector pCAMBIA1300-Cas9.",
                "Transform Agrobacterium tumefaciens strain EHA105 with the construct.",
                "Perform Agrobacterium-mediated transformation of rice calli.",
                "Select transformed calli on hygromycin-containing medium.",
                "Regenerate plants and screen for mutations using PCR and sequencing."
            ]
        },
        rawData: {
            crop,
            trait,
            environment,
            timestamp: new Date().toISOString(),
        }
    };

    return NextResponse.json(mockResponse);
}
