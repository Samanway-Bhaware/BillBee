import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Nimbus Labs Ltd.",
    companyAddress: "45 Innovation Drive, Suite 210",
    companyCity: "Austin",
    companyState: "TX",
    companyCountry: "USA",
    companyLogo: "/nimbus-logo.png",
    companyTaxId: "TX-987654321",
    companyZip: "73301",
    email: "contact@nimbuslabs.com",
  },
  yourDetails: {
    yourName: "Aarav Mehta",
    yourAddress: "14 Residency Road, Richmond Town",
    yourCity: "Bengaluru",
    yourState: "Karnataka",
    yourCountry: "India",
    yourLogo: "/aarav.png",
    yourEmail: "aarav.mehta@outlook.com",
    yourTaxId: "IN-27ABCDE1234F1Z5",
    yourZip: "560025",
  },
  paymentDetails: {
    bankName: "HDFC Bank",
    accountNumber: "009812345678",
    accountName: "Aarav Mehta",
    routingCode: "HDFC0001234",
    swiftCode: "HDFCINBBXXX",
    ifscCode: "HDFC0000123",
    currency: "INR",
  },
  invoiceTerms: {
    invoiceNumber: "INV-2025-014",
    issueDate: "Tue Sep 09 2025 00:00:00 GMT+0530 (India Standard Time)",
    dueDate: "Fri Sep 19 2025 00:00:00 GMT+0530 (India Standard Time)",
  },
  invoiceDetails: {
    note: "Consulting & Development Services for August 2025",
    discount: "15000",
    taxRate: "18",
    items: [
      {
        itemDescription: "Custom Web App Development",
        amount: 180000,
        qty: 1,
      },
      {
        itemDescription: "Cloud Hosting & Maintenance",
        amount: 25000,
        qty: 1,
      },
      {
        itemDescription: "UI/UX Design",
        amount: 40000,
        qty: 1,
      },
    ],
    currency: "INR",
  },
};

export default DemoPreview;
