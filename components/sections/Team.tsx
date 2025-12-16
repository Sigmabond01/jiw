"use client";

export default function Team() {
    return (
        <section id="team" className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')]"></div>
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-foreground">Our Team</h2>
                <p className="text-muted-foreground mb-20">Experts committed to your success.</p>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { name: "Eisuke Shigetoku", role: "CEO & Founder" },
                        { name: "Kazuki Maekoba", role: "Head of Operations" },
                        { name: "Mansi Naik", role: "Head of India Relations" }
                    ].map((member, i) => (
                        <div key={i} className="group">
                            <div className="w-48 h-64 mx-auto bg-secondary/20 mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 relative overflow-hidden">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-border">IMAGE</div>
                            </div>
                            <h3 className="text-lg font-serif font-bold text-foreground">{member.name}</h3>
                            <span className="text-primary text-xs uppercase tracking-widest block mt-2">{member.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
