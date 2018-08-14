import { Resume } from './resume'
import { Job } from './job'
import { Skill } from './skill'
import { Bullet } from './bullet'

export const RESUME: Resume[] = [
  {
    section:"/software-developer",
    jobs: [
      {
        company_name:"Stahls' Full Gear",
        title:"Software Developer",
        from:"Jan 2018",
        to:"Aug 2018",
        summary:"I began my Software Development Career at Full Gear with "
        +"creating simple apps using google spreadsheets "
        +"to manage file delivery. I then began support "
        +"a very large application that used a number of "
        +"proprietary libraries. Along with this support "
        +"I helped in the rebuilding of an old web app into "
        +"a newer Rails app mostly working on front end.",
        bullets:[
          {
            name: "Art Production Template Portal",
            detail:"removed possiblity "
            +"of external clients having outdated files.",
            languages:["JS"]
          },
          {
            name: "E-Commerce Integrations",
            detail: "Integrated E-Commerce platforms into our Production Software.",
            languages:["Node.Js","Azure"]
          },
          {
            name:"3D Builder",
            detail:"Supported complex internal software by fixing bugs and developing features.",
            languages:["Node.js"]
          },
          {
            name: "Artwork Automation",
            detail:"Fully automated custom artwork from a 3D builder into our Production Software.",
            languages:["Node.js","Azure"]
          },
          {
            name: "Cronos ERP",
            detail:"Refactor UI for online Artwork Approval Form and Approval System.",
            languages:["Vue.js","Rails"]
          }
        ]
      }
    ],
    skills: [
      { name:'Angular', proficiency:3 },
      { name:'JavaScript', proficiency:7 },
      { name:'Vue.js', proficiency:7 },
      { name:'Azure', proficiency:5 },
      { name:'Bootstrap', proficiency:7 },
      { name:'Rails', proficiency:2 },
      { name:'Node.js', proficiency:7 },
      { name:'FireBase', proficiency:5 }
    ]
  },
  {
    section:"/graphic-designer",
    jobs: [
      {
        company_name:"Stahls' Full Gear",
        title:"Art & Production Process Engineer",
        from:"Sept 2017",
        to:"Jan 2018",
        summary:"",
        bullets:[
          {
            name:"Color Matching",
            detail:"Developed process for matching supplied fabric color in printing process.",
            languages:["Color Management"]
          },
          {
            name:"Sub Lab Setup",
            detail: "Setup, debugged, and created process for sublimation printing / pressing / cutting apparel",
            languages:["Color Management"]
          },
          {
            name:"Artwork Automation",
            detail: "Created scripts and found faster ways to complete repetative artwork",
            languages:["Adobe JS"]
          }

        ]
      },
      {
        company_name:"Game Gear / Stahls' Full Gear",
        title:"Art Production Manager",
        from:"Apr 2016",
        to:"Sept 2017",
        summary:"Managed a team of artists focused on designing sport apparel for production. Primarily working with the sublimation printing process.",
        bullets:[
          {
            name:"Game Gear Catalog",
            detail:"",
            languages:["Illustrator","Photoshop","inDesign","Art Direction"],
            thumb_url:"../assets/img/catalog-thumb.jpg",
            images:[
              {
                url: "../assets/img/catalog1.jpg",
                altText: 'Game Gear Catalog',
                title: 'Game Gear Catalog'
              },
              {
                url: "../assets/img/catalog2.jpg",
                altText: 'Game Gear Catalog',
                title: 'Game Gear Catalog'
              },
              {
                url: "../assets/img/catalog3.jpg",
                altText: 'Game Gear Catalog',
                title: 'Game Gear Catalog'
              },
              {
                url: "../assets/img/catalog4.jpg",
                altText: 'Game Gear Catalog',
                title: 'Game Gear Catalog'
              },
              {
                url: "../assets/img/catalog5.jpg",
                altText: 'Game Gear Catalog',
                title: 'Game Gear Catalog'
              },
              {
                url: "../assets/img/catalog6.jpg",
                altText: 'Game Gear Catalog',
                title: 'Game Gear Catalog'
              },
              {
                url: "../assets/img/catalog7.jpg",
                altText: 'Game Gear Catalog',
                title: 'Game Gear Catalog'
              },
              {
                url: "../assets/img/catalog8.jpg",
                altText: 'Game Gear Catalog',
                title: 'Game Gear Catalog'
              },
              {
                url: "../assets/img/catalog9.jpg",
                altText: 'Game Gear Catalog',
                title: 'Game Gear Catalog'
              },
              {
                url: "../assets/img/catalog10.jpg",
                altText: 'Game Gear Catalog',
                title: 'Game Gear Catalog'
              }
            ]
          },
          {
            name:"Game Gear Ad",
            detail:"",
            languages:["Illustrator","Photoshop","inDesign"],
            thumb_url:"../assets/img/ggad-thumb.png",
            images:[
              {
                url: "../assets/img/ggad1.png",
                altText: 'Game Gear Magazine Ad',
                title: 'Game Gear Magazine Ad'
              }
            ]
          },
          {
            name:"CO-Two Branding",
            detail:"",
            languages:["Illustrator","inDesign"],
            thumb_url:"../assets/img/cotwo-thumb.png",
            images:[
              {
                url: "../assets/img/cotwo1.png",
                altText: 'CO-TWO Branding',
                title: 'CO-TWO Branding'
              }
            ]
          },

        ]
      },
      {
        company_name:"Game Gear",
        title:"Production Artist / Graphic Designer",
        from:"Mar 2013",
        to:"Apr 2016",
        summary:"Worked in a team of talented artists to create printable artwork from predesigned mockups as well as create new assets for printed media such as logos and other assets.",
        bullets:[
          {
            name:"Forge E-Sports",
            detail:"",

            languages:["Illustrator","Photoshop"],
            thumb_url:"../assets/img/forge-thumb.jpg",
            images:[
              {
                url: "../assets/img/forge1.jpg",
                altText: 'Forge E-Sports no.1',
                title: 'Forge E-Sports no.1'
              },
              {
                url: "../assets/img/forge2.jpg",
                altText: 'Forge E-Sports no.2',
                title: 'Forge E-Sports no.2'
              },
              {
                url: "../assets/img/forge3.jpg",
                altText: 'Forge E-Sports no.3',
                title: 'Forge E-Sports no.3'
              },
              {
                url: "../assets/img/forge4.jpg",
                altText: 'Forge E-Sports no.4',
                title: 'Forge E-Sports no.4'
              },
              {
                url: "../assets/img/forge5.jpg",
                altText: 'Forge E-Sports no.5',
                title: 'Forge E-Sports no.5'
              },
              {
                url: "../assets/img/forge6.jpg",
                altText: 'Forge E-Sports no.6',
                title: 'Forge E-Sports no.6'
              },
              {
                url: "../assets/img/forge7.jpg",
                altText: 'Forge E-Sports no.7',
                title: 'Forge E-Sports no.7'
              },
              {
                url: "../assets/img/forge8.jpg",
                altText: 'Forge E-Sports no.8',
                title: 'Forge E-Sports no.8'
              }

            ]
          },
          {
            name:"E-Sport Apparel",
            detail:"",
            languages:["Illustrator"],
            thumb_url:"../assets/img/forge-apparel-thumb.png",
            images:[
              {
                url: "../assets/img/forge-apparel1.png",
                altText: 'E-Sport Apparel Designs',
                title: 'E-Sport Apparel Designs'
              }
            ]
          },
          {
            name:"Olympic Oval Hockey",
            detail:"",
            languages:["Illustrator"],
            thumb_url:"../assets/img/hockey-thumb.png",
            images:[
              {
                url: "../assets/img/yeti1.png",
                altText: 'Olympic Oval Hockey: Yeti no.1',
                title: 'Olympic Oval Hockey: Yeti no.1'
              },
              {
                url: "../assets/img/yeti2.png",
                altText: 'Olympic Oval Hockey: Yeti no.2',
                title: 'Olympic Oval Hockey: Yeti no.2'
              },
              {
                url: "../assets/img/yeti3.png",
                altText: 'Olympic Oval Hockey: Yeti no.3',
                title: 'Olympic Oval Hockey: Yeti no.3'
              },
              {
                url: "../assets/img/salties1.png",
                altText: 'Olympic Oval Hockey: Salties no.1',
                title: 'Olympic Oval Hockey: Salties no.1'
              },
              {
                url: "../assets/img/salties2.png",
                altText: 'Olympic Oval Hockey: Salties no.2',
                title: 'Olympic Oval Hockey: Salties no.2'
              },
              {
                url: "../assets/img/salties3.png",
                altText: 'Olympic Oval Hockey: Salties no.3',
                title: 'Olympic Oval Hockey: Salties no.3'
              },
              {
                url: "../assets/img/bandits1.png",
                altText: 'Olympic Oval Hockey: Bandits no.1',
                title: 'Olympic Oval Hockey: Bandits no.1'
              },
              {
                url: "../assets/img/bandits2.png",
                altText: 'Olympic Oval Hockey: Bandits no.2',
                title: 'Olympic Oval Hockey: Bandits no.2'
              },
              {
                url: "../assets/img/silver1.png",
                altText: 'Olympic Oval Hockey: Silver Backs no.1',
                title: 'Olympic Oval Hockey: Silver Backs no.1'
              },
              {
                url: "../assets/img/silver2.png",
                altText: 'Olympic Oval Hockey: Silver Backs no.2',
                title: 'Olympic Oval Hockey: Silver Backs no.2'
              },
              {
                url: "../assets/img/silver3.png",
                altText: 'Olympic Oval Hockey: Silver Backs no.3',
                title: 'Olympic Oval Hockey: Silver Backs no.3'
              }
            ]
          }

        ]
      },
      {
        company_name:"BYU Harold B. Lee Library",
        title:"Senior Graphic Designer",
        from:"Jul 2011",
        to:"Dec 2012",
        summary:"Design In-House Promotional materials for lectures and events. These included; Posters, Flyers, T-Shirts, Banners, Table Tents, Water Bottles, and others.",
        bullets:[
          {
            name:"Latin American Lecture Series",
            detail:"",
            languages:["Illustrator", "Photoshop"],
            thumb_url:"../assets/img/lals-thumb.jpg",
            images:[
              {
                url: "../assets/img/lals1.jpg",
                altText: 'Latin America Lecture Series no.1',
                title: 'Latin America Lecture Series no.1'
              },
              {
                url: "../assets/img/lals2.jpg",
                altText: 'Latin America Lecture Series no.2',
                title: 'Latin America Lecture Series no.2'
              },
              {
                url: "../assets/img/lals3.jpg",
                altText: 'Latin America Lecture Series no.3',
                title: 'Latin America Lecture Series no.3'
              },
              {
                url: "../assets/img/lals4.jpg",
                altText: 'Latin America Lecture Series no.4',
                title: 'Latin America Lecture Series no.4'
              },
              {
                url: "../assets/img/lals5.jpg",
                altText: 'Latin America Lecture Series no.5',
                title: 'Latin America Lecture Series no.5'
              },
              {
                url: "../assets/img/lals6.jpg",
                altText: 'Latin America Lecture Series no.6',
                title: 'Latin America Lecture Series no.6'
              },
              {
                url: "../assets/img/lals7.jpg",
                altText: 'Latin America Lecture Series no.7',
                title: 'Latin America Lecture Series no.7'
              }
            ]
          },
          {
            name:"Pop-up Artist Event Poster",
            detail:"",
            languages:["Illustrator"],
            thumb_url:"../assets/img/popup-thumb.jpg",
            images:[
              {
                url: "../assets/img/popup1.jpg",
                altText: 'Pop-up Promotional no.1',
                title: 'Pop-up Promotional no.1'
              },
              {
                url: "../assets/img/popup2.jpg",
                altText: 'Pop-up Promotional no.1',
                title: 'Pop-up Promotional no.1'
              }
            ]
          },
          {
            name:"Instructional Signage",
            detail:"",
            languages:["Illustrator"],
            thumb_url:"../assets/img/instruct-thumb.jpg",
            images:[
              {
                url: "../assets/img/instruct1.jpg",
                altText: 'Instructional Sign no.1',
                title: 'Instructional Sign no.1'
              },
              {
                url: "../assets/img/instruct2.jpg",
                altText: 'Instructional Sign no.2',
                title: 'Instructional Sign no.2'
              }
            ]
          },
          {
            name:"Extended Hours Library Door Signs",
            detail:"",
            languages:["Illustrator","Photoshop"],
            thumb_url:"../assets/img/exthr-thumb.jpg",
            images:[
              {
                url: "../assets/img/exthr1.jpg",
                altText: 'Extended Hours Sign no.1',
                title: 'Extended Hours Sign no.1'
              },
              {
                url: "../assets/img/exthr2.jpg",
                altText: 'Extended Hours Sign no.2',
                title: 'Extended Hours Sign no.2'
              },
              {
                url: "../assets/img/exthr3.jpg",
                altText: 'Extended Hours Sign no.3',
                title: 'Extended Hours Sign no.3'
              },
              {
                url: "../assets/img/exthr4.jpg",
                altText: 'Extended Hours Sign no.4',
                title: 'Extended Hours Sign no.4'
              },
              {
                url: "../assets/img/exthr5.jpg",
                altText: 'Extended Hours Sign no.5',
                title: 'Extended Hours Sign no.5'
              }
            ]
          }
        ]
      }
    ],
    skills: [
      { name:'Illustrator', proficiency:9 },
      { name:'inDesign', proficiency:7 },
      { name:'Photoshop', proficiency:8 },
      { name:'Art Direction', proficiency:5 },
      { name:'Adobe JS', proficiency:9 },
      { name:'FireBase', proficiency:5 },
      { name:'Google Sheets', proficiency:6 },
      { name:'JavaScript', proficiency:7 },
      { name:'Color Management', proficiency:6 }
    ]
  }
]
