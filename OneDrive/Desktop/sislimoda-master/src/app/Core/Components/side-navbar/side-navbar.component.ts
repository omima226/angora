import { Component, OnInit } from '@angular/core';
import { SideNavbarRoutes } from '../../Routes/SideNavbarRoutes';
declare var $: any;
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  
  constructor(){

  }

  public get _SideNavbarRoutes(): typeof SideNavbarRoutes{
    return SideNavbarRoutes
  }


  // public get _UniversitiesRoutes(): typeof UniversitiesRoutes {
  //   return UniversitiesRoutes; 
  // }

  // public get _CollegesRoutes(): typeof CollegesRoutes {
  //   return CollegesRoutes; 
  // }

  // public get _MaterialsRoutes(): typeof materialsRoutes {
  //   return materialsRoutes; 
  // }

  // public get _DoctorsRoutes(): typeof DoctorsRoutes {
  //   return DoctorsRoutes; 
  // }

  // public get _QuestionsRoutes(): typeof QuestionsRoutes {
  //   return QuestionsRoutes; 
  // }

  ngOnInit(): void {
    $("#sidebarToggle, #sidebarToggleTop").on("click", (e: any) => {
      $("body").toggleClass("sidebar-toggled"),
        $(".sidebar").toggleClass("toggled"),
        $(".sidebar").hasClass("toggled") &&
        $(".sidebar .collapse").collapse("hide")
    }),
      $(window).resize(() => {
        $(window).width() < 768 &&
          $(".sidebar .collapse").collapse("hide"),
          $(window).width() < 480 && !$(".sidebar").hasClass("toggled") &&
          ($("body").addClass("sidebar-toggled"),
            $(".sidebar").addClass("toggled"),
            $(".sidebar .collapse").collapse("hide"))
      }), $("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", (e: any) => {
        var o;
        768 < $(window).width() &&
          (o = (o = e.originalEvent).wheelDelta || -o.detail, e.scrollTop += 30 * (o < 0 ? 1 : -1), e.preventDefault())
      })

      document.addEventListener("DOMContentLoaded", function() {
        // Get a reference to the "CRUD" link
        var crudLink = document.querySelector('.nav-link.collapsed');
    
        // Get a reference to the collapse div
        var collapseDiv = document.querySelector('#collapseTwo');
    
        // Add a click event listener to the "CRUD" link
        crudLink?.addEventListener('click', function(event) {
          // Prevent the default behavior of the link
          event.preventDefault();
    
          // Toggle the "show" class on the collapse div to show/hide it
          if (collapseDiv?.classList.contains('show')) {
            // If it's currently shown, hide it
            collapseDiv?.classList.remove('show');
          } else {
            // If it's currently hidden, show it
            collapseDiv?.classList.add('show');
          }
        });
      });
  }
}
