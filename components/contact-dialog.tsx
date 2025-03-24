"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Clock, CheckCircle } from "lucide-react";

export function ContactDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [step, setStep] = useState(1);

  const steps = [
    {
      title: "Telefonisch Contact",
      description: "We zijn beschikbaar om uw vragen te beantwoorden en uw situatie te bespreken.",
      icon: Phone,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Tijdens het telefoongesprek bespreken we:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Uw specifieke veiligheidsbehoefte</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Planning en beschikbaarheid</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Voorlopige kostenraming</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Afspraak Inplannen",
      description: "Kies een geschikt moment voor een uitgebreid gesprek.",
      icon: Calendar,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            We plannen een moment in voor:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Gedetailleerde projectbespreking</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Risico-inventarisatie</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Concrete prijsafspraak</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Direct Beschikbaar",
      description: "We zijn 24/7 bereikbaar voor spoedgevallen.",
      icon: Clock,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Voor spoedsituaties zijn we direct beschikbaar:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Snelle responstijd</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>24/7 bereikbaarheid</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Flexibele inzet</span>
            </li>
          </ul>
        </div>
      )
    }
  ];

  const currentStep = steps[step - 1];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            {currentStep.icon && <currentStep.icon className="h-6 w-6 text-primary" />}
            <DialogTitle>{currentStep.title}</DialogTitle>
          </div>
          <DialogDescription>
            {currentStep.description}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {currentStep.content}
        </div>

        <DialogFooter className="flex justify-between items-center">
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index + 1 === step ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Vorige
              </Button>
            )}
            {step < steps.length ? (
              <Button onClick={() => setStep(step + 1)}>
                Volgende
              </Button>
            ) : (
              <Button onClick={() => window.location.href = "tel:+31638091090"}>
                <Phone className="mr-2 h-4 w-4" />
                Nu Bellen
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}