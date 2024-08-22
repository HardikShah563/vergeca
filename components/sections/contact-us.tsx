"use client";

// importing from react
import { useState } from "react";

// importing shadcn components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// importing icons
import { ArrowUpRight } from "lucide-react";
import SendMail from "./SendMail";

export function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    function handleChange(event: any) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    async function handleSubmit(event: any) {
        event.preventDefault();

        const response = await fetch('https://api.example.com/data');
    }
    // $(function () {

    //     $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    //         preventSubmit: true,
    //         submitError: function ($form, event, errors) {
    //             // additional error messages or events
    //         },
    //         submitSuccess: function ($form, event) {
    //             event.preventDefault(); // prevent default submit behaviour
    //             // get values from FORM
    //             var name = $("input#name").val();
    //             var email = $("input#email").val();
    //             var phone = $("input#phone").val();
    //             var message = $("textarea#message").val();
    //             var firstName = name; // For Success/Failure Message
    //             // Check for white space in name for Success/Fail message
    //             if (firstName.indexOf(' ') >= 0) {
    //                 firstName = name.split(' ').slice(0, -1).join(' ');
    //             }
    //             $.ajax({
    //                 url: "https://vergeca.in/G8g2GpupCrxpsED-vergeca-v2-bSfejdRNEKd3Blq/admin_api/index.php/api/contactquery",
    //                 type: "POST",
    //                 data: {
    //                     name: name,
    //                     phone: phone,
    //                     email: email,
    //                     message: message
    //                 },
    //                 cache: false,
    //                 success: function () {
    //                     // Success message
    //                     $('#success').html("<div class='alert alert-success'>");
    //                     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                         .append("</button>");
    //                     $('#success > .alert-success')
    //                         .append("<strong>Thank you for writing to us. We will review your message and get in touch soon if needed. </strong>");
    //                     $('#success > .alert-success')
    //                         .append('</div>');

    //                     //clear all fields
    //                     $('#contactForm').trigger("reset");
    //                 },
    //                 error: function () {
    //                     // Fail message
    //                     $('#success').html("<div class='alert alert-danger'>");
    //                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                         .append("</button>");
    //                     $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
    //                     $('#success > .alert-danger').append('</div>');
    //                     //clear all fields
    //                     $('#contactForm').trigger("reset");
    //                 },
    //             });
    //         },
    //         filter: function () {
    //             return $(this).is(":visible");
    //         },
    //     });

    //     $("a[data-toggle=\"tab\"]").click(function (e) {
    //         e.preventDefault();
    //         $(this).tab("show");
    //     });
    // });
    return (
        <>
            <section className="section pt-10">
                <div className="my-5">
                    <h1 className="heading text-center my-10">
                        Contact Us
                    </h1>
                </div>

                <div className="px-[5vw] md:px-[10vw] lg:px-[20vw] space-y-4">
                    <SendMail />

                    <div className="flex items-center gap-5 w-full py-5">
                        <div className="border w-full"></div>
                        <span>OR</span>
                        <div className="border w-full"></div>
                    </div>

                    <Card className="p-5">
                        <h1 className="text-xl font-semibold">
                            You can drop us a text:
                        </h1>

                        <br />

                        <div className="my-2">
                            <span className="mr-2">Email: </span>
                            <a href="mailto:vergecainfo@gmail.com" className="font-semibold">
                                vergecainfo@gmail.com
                            </a>
                        </div>

                        <div>
                            <span className="mr-2">Phone: </span>
                            <span>
                                <a target="_blank" href="https://wa.me/919870942020" className="font-semibold whitespace-nowrap">
                                    +91 9870942020
                                </a>
                            </span>
                            /
                            <span>
                                <a target="_blank" href="https://wa.me/919821342020" className="font-semibold whitespace-nowrap">
                                    +91 9821342020
                                </a>
                            </span>
                        </div>
                    </Card>
                </div>
            </section>
        </>
    )
}