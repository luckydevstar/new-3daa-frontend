import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
    return (
        <div className="bg-primaryMain">
            <div className="max-w-7xl mx-auto py-20">
                <div className="flex gap-16">
                    <div className="flex-1">
                        <h2 className="text-5xl font-bold text-white">Contact us</h2>
                        <p className="max-w-100 text-2xl text-white mt-8">
                            We're happy to hear from you!
                            Drop us a message, and our dedicated team will get back to you shortly.
                        </p>
                    </div>

                    <div className="max-w-125 px-10 py-14 bg-white rounded-lg flex flex-col gap-6 w-125">
                        <h2 className="text-3xl font-bold">Get in touch</h2>

                        <Input className="h-12" placeholder="Full Name" />
                        <Input className="h-12" placeholder="Email" />
                        <Input className="h-12" placeholder="Phone" />

                        <RadioGroup className="flex gap-16">
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="email" id="r1" />
                                <Label htmlFor="r1">Email</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="phone" id="r2" />
                                <Label htmlFor="r2">Phone</Label>
                            </div>
                        </RadioGroup>

                        <Input className="h-12" placeholder="Reason for getting in touch" />
                        <Textarea placeholder="Message" />

                        <Button className="bg-primaryMain w-full py-3 text-white h-14">
                            SEND MESSAGE
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;