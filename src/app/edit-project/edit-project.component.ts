import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  providers: [ProjectService]
})

export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginUpdatingProject(projectToUpdate) {
    this.projectService.updateProject(projectToUpdate);
  }

}
