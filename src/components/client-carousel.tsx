const clients = [
    { name: "Buwule and Mayiga Advocates", logo: "https://site-contents.aptusagency.com/bariki/buwule-and-mayiga-advocates.png" },
    { name: "Case Medical", logo: "https://site-contents.aptusagency.com/bariki/case-medical.png" },
    { name: "Clark University", logo: "https://site-contents.aptusagency.com/bariki/clark-university.png" },
    { name: "Cornerstone Community School", logo: "https://site-contents.aptusagency.com/bariki/cornerstone-community-school.png" },
    { name: "Faraja Africa", logo: "https://site-contents.aptusagency.com/bariki/faraja-africa.png" },
    { name: "Makerere CEDAT", logo: "https://site-contents.aptusagency.com/bariki/makerere-cedat.png" },
    { name: "Makerere NetLabs", logo: "https://site-contents.aptusagency.com/bariki/makerere-netlabs.png" },
    { name: "Uganda Christian University", logo: "https://site-contents.aptusagency.com/bariki/uganda-christian-university.png" },
];

const ClientCarousel = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container-custom mb-10 text-center">
                <h3 className="text-2xl font-bold text-dark/80">Trusted by Leading Organizations</h3>
            </div>

            <div className="relative w-full">
                <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center">
                    {/* First set of logos */}
                    <div className="flex w-1/2 justify-around items-center px-2 sm:px-4">
                        {clients.map((client, index) => (
                            <div key={`client-1-${index}`} className="flex-shrink-0 flex items-center justify-center mx-4 sm:mx-6">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="object-contain max-h-full max-w-full"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second set of logos for seamless loop */}
                    <div className="flex justify-around items-center px-2 sm:px-4">
                        {clients.map((client, index) => (
                            <div key={`client-2-${index}`} className="flex-shrink-0 flex items-center justify-center mx-4 sm:mx-6">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="object-contain max-h-full max-w-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradient overlays for smooth fade effect at edges */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default ClientCarousel;
