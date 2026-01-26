import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Application = () => {
    return (
        <div className="max-w-7xl mx-auto mb-12">
            <div className="py-20">
                <h2 className="text-center text-6xl font-bold">
                    <span className="text-black">Student Finance</span> <br />
                    <span className="text-[#22B033]">Application</span>
                </h2>

                <p className="text-center text-lg my-12">
                    Complete and subit this application form. We'll then review, and contacdt you if you're eligible for funding or not.
                </p>

                <div className="flex justify-center gap-10">
                    <div className="max-w-105 w-105 flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-[#22B033]">Personal Details</h3>

                        <div className="flex flex-col gap-2 flex-1 w-full">
                            <label className="text-lightDark text-sm font-bold">Title</label>
                            <div className="flex items-center gap-6">
                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Mr</span>
                                </div>

                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Mrs</span>
                                </div>

                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Miss</span>
                                </div>

                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Ms</span>
                                </div>

                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Mx</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 flex-1 w-full">
                            <label className="text-lightDark text-sm font-bold">Please indicate your legal sex</label>
                            <div className="flex items-center gap-6">
                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Male</span>
                                </div>

                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Female</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">First Name</label>
                                <Input
                                    className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">Surname</label>
                                <Input
                                    className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                    placeholder="Surname"
                                />
                            </div>
                        </div>
                        
                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Date of Birth</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                type="date"
                            />
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Email</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                placeholder="Enter email here"
                            />
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Phone Number</label>
                            <PhoneInput defaultCountry="GB" placeholder="1234-5678-9000" />
                        </div>

                        <div className="flex gap-2">
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">Address</label>
                                <Input
                                    className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                    placeholder="Search your postcode"
                                />
                            </div>
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">At this address since</label>
                                <Input
                                    className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                    placeholder="Select a year"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Nationnal Insurance No.</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                placeholder="Enter National Insurance here"
                            />
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Nationality</label>
                            <Select>
                                <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                    <SelectValue placeholder="Select your Nationality" />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Have you lived within the UK for the last 3 years?</label>
                            <Select>
                                <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Are you a UK citizen?</label>
                            <Select>
                                <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Are you an EU citizen with settled or pre-settled status?</label>
                            <Select>
                                <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Date of Entry</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                type="date"
                            />
                        </div>

                        <div className="flex flex-col gap-2 flex-1 w-full">
                            <label className="text-lightDark text-sm font-bold">Next of kin 1</label>
                            <div className="flex items-center gap-6">
                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Parent</span>
                                </div>

                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Guardian</span>
                                </div>

                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Carer</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">First Name</label>
                                <Input
                                    className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">Surname</label>
                                <Input
                                    className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                    placeholder="Surname"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Relationship to you</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                placeholder="Enter relationship here"
                            />
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Email</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                placeholder="Enter email here"
                            />
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Phone Number</label>
                            <PhoneInput defaultCountry="GB" placeholder="1234-5678-9000" />
                        </div>

                        <div className="flex flex-col gap-2 flex-1 w-full">
                            <label className="text-lightDark text-sm font-bold">Next of kin 2</label>
                            <div className="flex items-center gap-6">
                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Parent</span>
                                </div>

                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Guardian</span>
                                </div>

                                <div className="flex item-center gap-2">
                                    <Checkbox />
                                    <span className="-mt-0.5">Carer</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">First Name</label>
                                <Input
                                    className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">Surname</label>
                                <Input
                                    className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                    placeholder="Surname"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Relationship to you</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                placeholder="Enter relationship here"
                            />
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Email</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                placeholder="Enter email here"
                            />
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Phone Number</label>
                            <PhoneInput defaultCountry="GB" placeholder="1234-5678-9000" />
                        </div>

                        <h3 className="text-2xl font-bold text-[#22B033] mt-6">Equality, Diversity and Incluison</h3>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">What is your ethnicity?</label>
                            <Select>
                                <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <h3 className="text-2xl font-bold text-[#22B033] mt-6">Qualifications on Entry</h3>

                        <div className="flex gap-2">
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">Do you have a GCSE English?</label>
                                <Select>
                                    <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                        <SelectValue placeholder="Select an option" />
                                    </SelectTrigger>
                                </Select>
                            </div>
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">English Grade</label>
                                <Input
                                    className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                    placeholder="Enter Grade here"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">What date did you pass?</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                type="date"
                            />
                        </div>

                        <div className="flex gap-2">
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">Do you have a GCSE Maths?</label>
                                <Select>
                                    <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                        <SelectValue placeholder="Select an option" />
                                    </SelectTrigger>
                                </Select>
                            </div>
                            <div className="flex flex-col flex-1 w-full gap-2">
                                <label className="text-lightDark text-sm font-bold">Maths Grade</label>
                                <Input
                                    className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                    placeholder="Enter Grade here"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">What date did you pass?</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                type="date"
                            />
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">What is the highest level of qualification?</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                placeholder="Enter qualification here"
                            />
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">List all qualifications</label>
                            <Textarea
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                placeholder="Enter text here"
                            />
                        </div>
                    </div>

                    <div className="max-w-105 w-105 flex flex-col gap-4 h-min">
                        <h3 className="text-2xl font-bold text-[#22B033]">Please indicate your current status in the UK:</h3>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Please note the details provided will be checked with the UKBA if necessary</label>
                            <Select>
                                <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Complete Date of Entry</label>
                            <Input
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                type="date"
                            />
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Please State Reason</label>
                            <Textarea
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                placeholder="Enter text here"
                            />
                        </div>

                        <h3 className="text-2xl font-bold text-[#22B033] mt-6">Employment Status</h3>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Please indicate your legal sex</label>
                            
                            <div className="flex flex-col gap-4 mt-3">
                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">In paid employment</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">Self-Employed</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">Not in paid employment, looking for work and available to start work</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">Not in paid employment, not looking for work and/or not available to start work</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Please tick number of hours employed</label>
                            <Select>
                                <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <h3 className="text-2xl font-bold text-[#22B033] mt-6">Benefit Status</h3>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Please tick the following benefits or options that apply to you</label>
                            
                            <div className="flex flex-col gap-4 mt-3">
                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">JSA</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">Employment and Support Allowance {`(ESA)`}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">None</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Other please specify</label>
                            <Textarea
                                className="h-10 px-2 py-2 font-sm text-black rounded-sm"
                                placeholder="Enter text here"
                            />
                        </div>

                        <h3 className="text-2xl font-bold text-[#22B033] mt-6">Criminal Convictions</h3>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Please tick the following that apply to you</label>
                            
                            <div className="flex flex-col gap-4 mt-3">
                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">I have a Criminal Conviction{`(s) (Do not tick if you Criminal Convections(s) relate to a motoring offence for which a fine and/or a maximum of 3 penalty points were imposed or are spent in accordance with the Rehabilitation of Offenders Act 1974)`}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">I do not have a Criminal Conviction{`(s)`}</span>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-[#22B033] mt-6">Disability</h3>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Do you consider your slef to have a learning difficulty or disability?</label>
                            <Select>
                                <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Tick the options relating to your primary disability/difficulty</label>
                            
                            <div className="flex flex-col gap-4 mt-3">
                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">4 Visual Impairment</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">5 Hearing Impairment</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">6 Disability affecting mobility</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">7 Profound complex disabilities</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">8 Social & emotional difficulties</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">9 Mental health difficulty</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">10 Moderate learning difficulty</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">11 Severe learning difficulty</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">12 Dyslexia</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">13 Dyscalculia</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">14 Autism spectrum disorder</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">15 Asperger's syndrome</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">16 Temporary disability after illness {`(e.g. post-viral) or accident`}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">17 Speech, language and communication needs</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">93 Other physical disability</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">94 Other specific learning difficulty</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">95 Other medical condition {`e.g. epilepsy, asthma, diabetes`}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">96 Other learning difficulty</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm text-lightDark">97 Other disability</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Are you in receipt of Disabled Student Allowance?</label>
                            <Select>
                                <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Do you care for someone else's health or wellbeing needs?</label>
                            <Select>
                                <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <div className="flex flex-col flex-1 w-full gap-2">
                            <label className="text-lightDark text-sm font-bold">Have you ever been adopted, fostered or placed in a children's home?</label>
                            <Select>
                                <SelectTrigger className="w-full h-10! py-2 font-sm text-black rounded-sm">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <Button className="w-full text-sm bg-[#22B033] rounded-sm text-white h-12 mt-8">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application;
