"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, Eye, Clipboard, ChevronRight, Phone, Mail, Building, CheckCircle2, Award, Clock, Users, Copy, Check, ArrowRight, Train } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const copyEmail = async () => {
    await navigator.clipboard.writeText('info@chzdienstverlening.nl');
    setCopied(true);
    toast({
      title: "E-mailadres gekopieerd",
      description: "Het e-mailadres is naar je klembord gekopieerd.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      title: "Telefonisch Contact",
      description: "Direct persoonlijk contact voor snelle service",
      icon: Phone,
      content: (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.location.href = "tel:+31638091090"}
            >
              <Phone className="mr-2 h-4 w-4" />
              Nu Bellen
            </Button>
            <p className="text-sm text-muted-foreground">
              24/7 bereikbaar voor spoedgevallen
            </p>
          </motion.div>
        </div>
      )
    },
    {
      title: "E-mail Contact",
      description: "Stuur ons een bericht voor een uitgebreide offerte",
      icon: Mail,
      content: (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div
              className="group flex items-center gap-3 p-4 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
              onClick={copyEmail}
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="flex-1 font-medium">info@chzdienstverlening.nl</span>
              <motion.div
                animate={copied ? { scale: [1, 1.2, 1] } : {}}
                className="text-muted-foreground"
              >
                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.location.href = "mailto:info@chzdienstverlening.nl"}
            >
              <Mail className="mr-2 h-4 w-4" />
              Open in Mail App
            </Button>
          </motion.div>
        </div>
      )
    },
    {
      title: "Direct Beschikbaar",
      description: "Flexibele inzet op korte termijn mogelijk",
      icon: Clock,
      content: (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Snelle responstijd</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>24/7 bereikbaarheid</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Flexibele inzet</span>
            </div>
          </motion.div>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section pt-32 pb-24 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Train className="h-12 w-12 text-white mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Charafi Dienstverlening
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
              Uw betrouwbare partner voor professionele spoorwegbewaking. Met jarenlange ervaring in 
              het waarborgen van veiligheid tijdens spoorwegonderhoud.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Opnemen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Waarom Charafi Dienstverlening?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wij onderscheiden ons door onze expertise, betrouwbaarheid en flexibiliteit
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <CheckCircle2 className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Gecertificeerd</h3>
              <p className="text-muted-foreground">Volledig gecertificeerd en erkend voor spoorwegveiligheid</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Award className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Ervaren</h3>
              <p className="text-muted-foreground">Uitgebreide ervaring met complexe spoorwegprojecten</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Clock className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">24/7 Beschikbaar</h3>
              <p className="text-muted-foreground">Flexibele inzet op elk gewenst moment</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Users className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Betrouwbaar</h3>
              <p className="text-muted-foreground">Vertrouwd door toonaangevende spoorwegbedrijven</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Onze Diensten</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professionele spoorwegbewaking voor optimale veiligheid tijdens onderhoudswerkzaamheden
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={cardVariants}>
              <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <Shield className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle className="text-xl">Spoorwegbewaking</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Professionele veiligheidswacht</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Continue monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Snelle interventie bij risico's</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Volgens actuele normen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <AlertTriangle className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle className="text-xl">Veiligheidsmaatregelen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Risicoanalyse ter plaatse</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Implementatie maatregelen</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Veiligheidsprotocollen</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Noodprocedures</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <Eye className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle className="text-xl">Toezicht</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>24/7 beschikbaarheid</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Directe communicatie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Proactieve aanpak</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Flexibele inzet</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <Clipboard className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle className="text-xl">Veiligheidsinspecties</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Periodieke controles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Documentatie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Rapportage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary/60" />
                      <span>Verbeteradvies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Onze Werkwijze</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professioneel, efficiënt en volgens de hoogste veiligheidsstandaarden
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center relative"
            >
              <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-semibold">1</div>
              <h3 className="text-xl font-semibold mb-4">Intake</h3>
              <p className="text-muted-foreground">Analyse van uw specifieke veiligheidsbehoefte</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center relative"
            >
              <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-semibold">2</div>
              <h3 className="text-xl font-semibold mb-4">Planning</h3>
              <p className="text-muted-foreground">Gedetailleerd veiligheidsplan op maat</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center relative"
            >
              <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-semibold">3</div>
              <h3 className="text-xl font-semibold mb-4">Uitvoering</h3>
              <p className="text-muted-foreground">Professionele bewaking volgens plan</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section id="over-ons" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Bedrijfsgegevens</h2>
            <div className="grid gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-secondary rounded-xl shadow-lg"
              >
                <Building className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Charafi Dienstverlening</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>KvK: 92506496</p>
                  <p>BTW: 004958018B45</p>
                  <p>Omzetbelasting: 251589201B01</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-secondary rounded-xl shadow-lg"
              >
                <Mail className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Bankgegevens</h3>
                <p className="text-muted-foreground">IBAN: NL21 RABO 0379 5051 93</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Neem Contact Op</h2>
            <p className="text-lg text-muted-foreground">
              Kies de manier waarop u contact met ons wilt opnemen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative ${currentStep === index ? 'ring-2 ring-primary' : ''}`}
              >
                <Card
                  className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    currentStep === index ? 'bg-primary/5' : ''
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className={`h-6 w-6 ${currentStep === index ? 'text-primary' : 'text-muted-foreground'}`} />
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardHeader>
                </Card>
                {currentStep === index && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-4 h-4 bg-primary rotate-45" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              {steps[currentStep].content}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-300 ${
                  index === currentStep ? 'bg-primary' : 'bg-primary/20'
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentStep(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}