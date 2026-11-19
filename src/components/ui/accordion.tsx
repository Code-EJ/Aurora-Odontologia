"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

// Radix preserva foco, estado e atalhos de teclado. O tema Aurora define a apresentação.
const Accordion = AccordionPrimitive.Root;

function AccordionItem({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn("accordion-item", className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger className={cn("accordion-trigger", className)} {...props}>
        {children}
        <Plus size={19} strokeWidth={1.5} aria-hidden="true" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: ComponentProps<typeof AccordionPrimitive.Content>) {
  return <AccordionPrimitive.Content className="accordion-content" {...props}><div className={cn("accordion-answer", className)}>{children}</div></AccordionPrimitive.Content>;
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
