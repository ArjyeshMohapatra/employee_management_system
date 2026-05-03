import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
 
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, OnDestroy {
 
  editForm!: FormGroup;
  employeeId!: string;
  isEditing = false;
  hasChanges = false;
  isApplying = false;
  activeSection: 'employee' | 'employeeDetails' | 'jobDetails' = 'employee';

  private originalFormValue = '';
  private formChanges?: Subscription;
 
  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private notify: NotificationService
  ) {}
 
  ngOnInit(): void {
    this.initForm();
 
    this.employeeId = localStorage.getItem('employeeId') || '';
 
    if (!this.employeeId) {
      this.notify.showWarning('Employee ID missing', 'Employee ID was not found for this profile.');
      return;
    }
 
    this.loadEmployeeData();
  }

  ngOnDestroy(): void {
    this.formChanges?.unsubscribe();
  }
 
  // ---------------- FORM ----------------
  initForm() {
    this.editForm = this.fb.group({
      employee: this.fb.group({
        first_name: [''],
        last_name: [''],
        phone: [''],
        date_of_birth: [''],
        gender: ['']
      }),
      employeeDetails: this.fb.group({
        address: [''],
        city: [''],
        state: [''],
        country: [''],
        pincode: [''],
        emergency_contact: [''],
        marital_status: [''],
        aadhar_no: [''],
        father_name: [''],
        mother_name: ['']
      }),
      jobDetails: this.fb.group({
        designation: [''],
        department: [''],
        employee_type: [''],
        salary: [''],
        joining_date: [''],
        experience_duration: [''],
        skills: [''],
        prev_org: ['']
      })
    });

    this.editForm.disable();
    this.formChanges = this.editForm.valueChanges.subscribe(() => {
      this.hasChanges = this.serializeFormValue() !== this.originalFormValue;
    });
  }
 
  // ---------------- LOAD DATA ----------------
  loadEmployeeData() {
    this.empService.getEmployeeById(this.employeeId).subscribe({
      next: (res: any) => {
 
        const data = res.data;
 
        this.employeeId = data.employee.id;
 
        this.editForm.patchValue({
          employee: {
            ...data.employee,
            date_of_birth: this.formatDate(data.employee.date_of_birth)
          },
          employeeDetails: data.employeeDetails,
          jobDetails: {
            ...data.jobDetails,
            joining_date: this.formatDate(data.jobDetails.joining_date),
 
            skills: data.jobDetails.skills?.join(', '),
 
            prev_org: data.jobDetails.prev_org
              ?.map((x: any) => x.company)
              .join(', ')
          }
        });

        this.originalFormValue = this.serializeFormValue();
        this.hasChanges = false;
        this.isEditing = false;
        this.isApplying = false;
        this.editForm.disable();
      },
      error: (err) => {
        this.isApplying = false;
        this.notify.showError(err);
      }
    });
  }
 
  // ---------------- DATE FORMAT ----------------
  formatDate(date: string) {
    return date ? date.split('T')[0] : '';
  }

  enableEditing(): void {
    this.isEditing = true;
    this.hasChanges = false;
    this.originalFormValue = this.serializeFormValue();
    this.editForm.enable();
  }

  selectSection(section: 'employee' | 'employeeDetails' | 'jobDetails'): void {
    this.activeSection = section;
  }

  get canApply(): boolean {
    return this.isEditing && this.hasChanges && !this.isApplying;
  }
 
  // ---------------- UPDATE ----------------
  onUpdate() {
    if (!this.canApply) return;

    this.isApplying = true;
 
    const form = this.editForm.getRawValue();
 
    const payload = {
      employee: {
        ...form.employee
      },
 
      employeeDetails: {
        ...form.employeeDetails
      },
 
      jobDetails: {
        ...form.jobDetails,
 
        skills: form.jobDetails.skills
          ? form.jobDetails.skills.split(',').map((s: string) => s.trim())
          : [],
 
        prev_org: form.jobDetails.prev_org
          ? form.jobDetails.prev_org.split(',').map((c: string) => ({
              company: c.trim(),
              years: 0
            }))
          : []
      }
    };
 
    this.empService.updateEmployee(this.employeeId, payload).subscribe({
      next: () => {
        this.notify.showSuccess('Profile updated', 'Your profile changes were applied successfully.');
        this.loadEmployeeData();
      },
      error: (err) => {
        this.isApplying = false;
        this.notify.showError(err);
      }
    });
  }

  private serializeFormValue(): string {
    return JSON.stringify(this.editForm.getRawValue());
  }
}
