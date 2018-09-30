import { trigger, style, animate, transition, state } from '@angular/animations';

export const fade = [
  trigger('fade', [
    state('in', style({ 'opacity': '1' })),
    state('out', style({ 'opacity': '0' })),
    transition('* <=> *', [
      animate(2000)
    ])
  ])
];

// animations: [
//     // the fade-in/fade-out animation.
//     trigger('simpleFadeAnimation', [

//       // the "in" style determines the "resting" state of the element when it is visible.
//       state('in', style({opacity: 1})),
//       state('out', style({opacity: 1})),

//       // fade in when created. this could also be written as transition('void => *')
//       transition(':enter', [
//         style({opacity: 0}),
//         animate(3000 )
//       ]),

//       // fade out when destroyed. this could also be written as transition('void => *')
//       transition(':leave',
//         animate(600, style({opacity: 0})))
//     ])
//   ]