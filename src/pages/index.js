import React from "react"
import {
    Button,
    Card,
    CustomerCard,
    LabelText,
    SplitSection,
    StatsBox,
} from "../components/commons"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import HeroImage from "../svg/HeroImage"
import SvgCharts from "../svg/SvgCharts"

import testimonialsData from "../data/testimonials-data"

export default () => (
    <Layout>
        <SEO title="Home" />
        <section className="pt-20 md:pt-40">
            <div className="container mx-auto px-8 lg:flex">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                        Let's win the fight against COVID-19
                    </h1>
                    <p className="text-xl lg:text-2xl mt-6 font-light">
                        We will use the amazing skills of all the team to create
                        a world high impact surveillance app, supporting the
                        necessities of the world facing the COVID pandemic.
                    </p>
                    <p className="mt-8 md:mt-12">
                        <Button size="lg">Use app</Button>
                    </p>
                    <p className="mt-4 text-gray-600">
                        Also available web version, android and iOS
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <HeroImage />
                </div>
            </div>
        </section>
        <section id="features" className="py-20 lg:pb-40 lg:pt-48">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl lg:text-5xl font-semibold">
                    Principles
                </h2>
                <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
                    <div className="flex-1 px-3">
                        <Card className="mb-8">
                            <p className="font-semibold text-xl">
                                Detect alarm signs
                            </p>
                            <p className="mt-4">
                                An enim nullam tempor gravida donec enim ipsum
                                blandit porta justo integer odio velna vitae
                                auctor integer.
                            </p>
                        </Card>
                    </div>
                    <div className="flex-1 px-3">
                        <Card className="mb-8">
                            <p className="font-semibold text-xl">Suggesting</p>
                            <p className="mt-4">
                                To relief the load of the healthcare system by
                                redirecting the low risk patients to sites with
                                reliable information about health care and
                                redirect the high-risk patients to the closest
                                medical facility.
                            </p>
                        </Card>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:-mx-3">
                    <div className="flex-1 px-3">
                        <Card className="mb-8">
                            <p className="font-semibold text-xl">Reporting</p>
                            <p className="mt-4">
                                To serve as generators of real-time information.
                            </p>
                        </Card>
                    </div>
                    <div className="flex-1 px-3">
                        <Card className="mb-8">
                            <p className="font-semibold text-xl">Linking</p>
                            <p className="mt-4">
                                To keep close links with healthcare authorities
                                and generate useful epidemiological information.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
        <SplitSection
            id="services"
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                    <h3 className="text-3xl font-semibold leading-tight">
                        About us
                    </h3>
                    <p className="mt-8 text-xl font-light leading-relaxed">
                        Fight COVID-19 is a non-profit, collaborative community
                        democratizing AI to assist in the detection and triage
                        of COVID-19 cases
                    </p>
                </div>
            }
            secondarySlot={<SvgCharts />}
        />
        <SplitSection
            reverseOrder
            primarySlot={
                <div className="lg:pl-32 xl:pl-48">
                    <h3 className="text-3xl font-semibold leading-tight">
                        How to contribute
                    </h3>
                    <p className="mt-8 text-xl font-light leading-relaxed">
                        Read more in{" "}
                        <a href="https://github.com/elcronos/COVID-19#this-is-how-you-can-help">
                            https://github.com/elcronos/COVID-19#this-is-how-you-can-help
                        </a>
                    </p>
                </div>
            }
            secondarySlot={<SvgCharts />}
        />
        <section id="stats" className="py-20 lg:pt-32">
            <div className="container mx-auto text-center">
                <LabelText className="text-gray-600">STATUS</LabelText>
                <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
                    <div className="w-full sm:w-1/3">
                        <StatsBox
                            primaryText="+100%"
                            secondaryText="Stats Information"
                        />
                    </div>
                    <div className="w-full sm:w-1/3">
                        <StatsBox
                            primaryText="+100%"
                            secondaryText="Stats Information"
                        />
                    </div>
                    <div className="w-full sm:w-1/3">
                        <StatsBox
                            primaryText="+100%"
                            secondaryText="Stats Information"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section id="testimonials" className="py-20 lg:py-40">
            <div className="container mx-auto">
                <LabelText className="mb-8 text-gray-600 text-center">
                    Testimonials
                </LabelText>
                <div className="flex flex-col md:flex-row md:-mx-3">
                    {testimonialsData.map(customer => (
                        <div
                            key={customer.customerName}
                            className="flex-1 px-3"
                        >
                            <CustomerCard customer={customer} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
            <h3 className="text-5xl font-semibold">
                Ready ?
            </h3>
            <p className="mt-8 text-xl font-light">
                Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque
                fermentum dui faucibus in.
            </p>
            <p className="mt-8">
                <Button size="xl">Use app</Button>
            </p>
        </section>
    </Layout>
)
