// React-email
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

// Variables
import { BASE_URL } from "@/lib/variables"; // Ensure BASE_URL is defined properly

type SendPdfEmailProps = {
  invoiceNumber: string;
};

export default function SendPdfEmail({ invoiceNumber }: SendPdfEmailProps) {
  const logoUrl = `${BASE_URL}/assets/img/invoify-logo.png`; // Ensure it's an absolute URL

  return (
    <Html>
      <Head />
      <Preview>Your invoice #{invoiceNumber} is ready for download</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white border-black-950 my-10 px-10 py-4 rounded-md">              
              <Heading className="leading-tight">
                Thanks for using InGen!
              </Heading>

              <Text>
                We're pleased to inform you that your invoice{" "}
                <b>#{invoiceNumber}</b> is ready for download. Please find the
                attached PDF document.
              </Text>

              <Hr />

              <Text>
                Best Regards,
                <br />
                InGen Team
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
