const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              CareInfra
            </div>
            <p className="text-background/80 max-w-md">
              AI + Device Infrastructure for Care Delivery Without the Overhead. 
              Scaling healthcare through intelligent automation.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="space-y-2">
              <p className="text-background/80">Ready to transform care delivery?</p>
              <p className="text-sm text-background/60">
                Contact us to learn more about our AI Care Infrastructure platform.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2025 CareInfra. All rights reserved. | AI-Powered Healthcare Infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;