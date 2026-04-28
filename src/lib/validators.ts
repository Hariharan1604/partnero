import { z } from "zod";

export const builderEnquirySchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  city: z.string().min(1, "City is required"),
  projects: z.string().min(1, "Number of projects is required"),
  monthlyEnquiries: z.string().min(1, "Monthly enquiries is required"),
  teamSize: z.string().min(1, "Team size is required"),
  message: z.string().optional(),
});

export const sellerAppointmentSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  mobileNumber: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Valid email is required"),
  propertyType: z.string().min(1, "Property type is required"),
  propertyLocation: z.string().min(1, "Property location is required"),
  expectedPrice: z.string().min(1, "Expected price is required"),
  preferredCallTime: z.string().min(1, "Preferred call time is required"),
  message: z.string().optional(),
});

export type BuilderEnquiryData = z.infer<typeof builderEnquirySchema>;
export type SellerAppointmentData = z.infer<typeof sellerAppointmentSchema>;
