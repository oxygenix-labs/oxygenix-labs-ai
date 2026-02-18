"use client";

import PlanCard from "@/components/dashboard/billing/PlanCard";
import BillingHistory from "@/components/dashboard/billing/BillingHistory";

export default function BillingPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Billing & Subscription</h1>
                <p className="text-gray-400">Manage your subscription plan, usage, and invoices.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                    <PlanCard />
                </div>
                <div className="lg:col-span-2">
                    <BillingHistory />
                </div>
            </div>
        </div>
    );
}
