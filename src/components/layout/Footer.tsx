export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight">OXYGENIX<span className="text-primary">.AI</span></h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Engineering the future of sustainable agriculture through computational intelligence.
                        </p>
                    </div>

                    {[
                        { title: "Platform", links: ["Features", "Research", "Security", "Enterprise", "Pricing"] },
                        { title: "Company", links: ["About", "Careers", "Blog", "Contact", "Press"] },
                        { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"] }
                    ].map((col, i) => (
                        <div key={i}>
                            <h4 className="text-white font-medium mb-4">{col.title}</h4>
                            <ul className="space-y-2">
                                {col.links.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600">
                    <p>© 2026 Oxygenix AI Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
