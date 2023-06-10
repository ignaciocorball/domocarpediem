import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { loadConfettiShape } from "tsparticles-shape-confetti";

@Component({
  selector: 'app-section-booking-award',
  templateUrl: './section-booking-award.component.html',
  styleUrls: ['./section-booking-award.component.css']
})
export class SectionBookingAwardComponent {
  id = "tsparticles";

  particlesOptions = {
    background: {
        color: {
            value: "transparent",
        },
    },
    fpsLimit: 30,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: ClickMode.push,
            },
            onHover: {
                enable: false,
                mode: HoverMode.repulse,
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: ["#FFFFFF"]
        },
        links: {
            color: "#ffffff",
            distance: 70,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            enable: true,
            outModes: {
                default: OutMode.bounce,
            },
            //random: true,
            //decay: 0.05,
            //speed: 50,
            straight: false,
            //gravity: {
            //  enable: true,
            //  acceleration: 20
            //},
        },
        number: {
            value: 150,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
          type: ["circle", "star","polygon"],
        },
        size: {
            value: { min: 1, max: 5 },
        },

    },
    detectRetina: true,
};

  particlesLoaded(container: Container): void {
    //console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    //console.log(engine);
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
