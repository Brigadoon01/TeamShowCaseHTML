/**
 * Team Showcase - Standalone HTML + CSS + JavaScript Implementation
 * Uses local team data
 */

class TeamShowcase {
  constructor() {
    // Configuration
    this.config = {
      itemsPerPage: 6,
      debounceDelay: 300,
    }

    // Local team data
    this.teamData = {
      departments: [
        { id: 1, name: "Engineering", slug: "engineering", count: 4 },
        { id: 2, name: "Design", slug: "design", count: 2 },
        { id: 3, name: "Product", slug: "product", count: 1 },
        { id: 4, name: "Marketing", slug: "marketing", count: 1 },
        { id: 5, name: "Analytics", slug: "analytics", count: 1 },
      ],
      members: [
        {
          id: 1,
          name: "Sarah Johnson",
          jobTitle: "Senior Front-End Developer",
          bio: "Passionate about creating beautiful, accessible user interfaces with modern web technologies. 5+ years of experience in React and Vue.js.",
          department: "Engineering",
          departmentSlug: "engineering",
          photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
          socialLinks: {
            linkedin: "https://linkedin.com/in/sarah-johnson",
            twitter: "https://twitter.com/sarah_js",
          },
          contact: {
            email: "sarah.johnson@company.com",
            phone: "+1 (555) 123-4567",
          },
          displayOrder: 1,
        },
        {
          id: 2,
          name: "Michael Chen",
          jobTitle: "UX/UI Designer",
          bio: "Creative designer focused on user-centered design principles. Specializes in design systems and user research methodologies.",
          department: "Design",
          departmentSlug: "design",
          photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
          socialLinks: {
            linkedin: "https://linkedin.com/in/michael-chen",
            twitter: "https://twitter.com/michael_design",
          },
          contact: {
            email: "michael.chen@company.com",
            phone: "+1 (555) 234-5678",
          },
          displayOrder: 2,
        },
        {
          id: 3,
          name: "Emily Davis",
          jobTitle: "Product Manager",
          bio: "Strategic product leader with expertise in agile methodologies and data-driven decision making. Passionate about building products that users love.",
          department: "Product",
          departmentSlug: "product",
          photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
          socialLinks: {
            linkedin: "https://linkedin.com/in/emily-davis",
            twitter: "https://twitter.com/emily_pm",
          },
          contact: {
            email: "emily.davis@company.com",
            phone: "+1 (555) 345-6789",
          },
          displayOrder: 3,
        },
        {
          id: 4,
          name: "David Wilson",
          jobTitle: "Back-End Developer",
          bio: "Full-stack developer with expertise in Node.js, Python, and cloud architecture. Loves solving complex technical challenges.",
          department: "Engineering",
          departmentSlug: "engineering",
          photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
          socialLinks: {
            linkedin: "https://linkedin.com/in/david-wilson",
            twitter: "https://twitter.com/david_dev",
          },
          contact: {
            email: "david.wilson@company.com",
            phone: "+1 (555) 456-7890",
          },
          displayOrder: 4,
        },
        {
          id: 5,
          name: "Alice Rodriguez",
          jobTitle: "Data Scientist",
          bio: "Data scientist with a PhD in Statistics. Specializes in machine learning, predictive analytics, and turning data into actionable insights.",
          department: "Analytics",
          departmentSlug: "analytics",
          photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
          socialLinks: {
            linkedin: "https://linkedin.com/in/alice-rodriguez",
            twitter: "https://twitter.com/alice_data",
          },
          contact: {
            email: "alice.rodriguez@company.com",
            phone: "+1 (555) 567-8901",
          },
          displayOrder: 5,
        },
        {
          id: 6,
          name: "John Martinez",
          jobTitle: "DevOps Engineer",
          bio: "Infrastructure specialist focused on automation, CI/CD, and cloud platforms. Passionate about building scalable and reliable systems.",
          department: "Engineering",
          departmentSlug: "engineering",
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
          socialLinks: {
            linkedin: "https://linkedin.com/in/john-martinez",
            twitter: "https://twitter.com/john_devops",
          },
          contact: {
            email: "john.martinez@company.com",
            phone: "+1 (555) 678-9012",
          },
          displayOrder: 6,
        },
        {
          id: 7,
          name: "Sophia Taylor",
          jobTitle: "Marketing Manager",
          bio: "Digital marketing expert with a focus on content strategy, SEO, and brand development. Drives growth through data-driven campaigns.",
          department: "Marketing",
          departmentSlug: "marketing",
          photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
          socialLinks: {
            linkedin: "https://linkedin.com/in/sophia-taylor",
            twitter: "https://twitter.com/sophia_mkt",
          },
          contact: {
            email: "sophia.taylor@company.com",
            phone: "+1 (555) 789-0123",
          },
          displayOrder: 7,
        },
        {
          id: 8,
          name: "Robert Kim",
          jobTitle: "Senior Designer",
          bio: "Visual designer with 8+ years of experience in branding, web design, and illustration. Believes in the power of good design to solve problems.",
          department: "Design",
          departmentSlug: "design",
          photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face",
          socialLinks: {
            linkedin: "https://linkedin.com/in/robert-kim",
            twitter: "https://twitter.com/robert_design",
          },
          contact: {
            email: "robert.kim@company.com",
            phone: "+1 (555) 890-1234",
          },
          displayOrder: 8,
        },
        {
          id: 9,
          name: "Lisa Thompson",
          jobTitle: "QA Engineer",
          bio: "Quality assurance specialist with expertise in automated testing, performance testing, and ensuring exceptional user experiences.",
          department: "Engineering",
          departmentSlug: "engineering",
          photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
          socialLinks: {
            linkedin: "https://linkedin.com/in/lisa-thompson",
            twitter: "https://twitter.com/lisa_qa",
          },
          contact: {
            email: "lisa.thompson@company.com",
            phone: "+1 (555) 901-2345",
          },
          displayOrder: 9,
        },
      ],
    }

    // State
    this.state = {
      teamMembers: [],
      filteredMembers: [],
      departments: [],
      currentPage: 1,
      totalPages: 1,
      selectedDepartment: "all",
      searchQuery: "",
      isLoading: false,
      hasError: false,
    }

    // DOM elements
    this.elements = {
      loadingState: document.getElementById("loading-state"),
      errorState: document.getElementById("error-state"),
      teamSection: document.getElementById("team-section"),
      teamGrid: document.getElementById("team-grid"),
      noResults: document.getElementById("no-results"),
      searchInput: document.getElementById("team-search"),
      departmentSelect: document.getElementById("department-filter"),
      resultsCount: document.getElementById("results-count"),
      pagination: document.getElementById("pagination"),
      pageNumbers: document.getElementById("page-numbers"),
      prevButton: document.getElementById("prev-page"),
      nextButton: document.getElementById("next-page"),
    }

    // Debounced search function
    this.debouncedSearch = this.debounce(this.handleSearch.bind(this), this.config.debounceDelay)

    this.init()
  }

  /**
   * Initialize the application
   */
  async init() {
    try {
      this.showLoading()
      await this.loadTeamData()
      this.renderDepartments()
      this.renderTeamMembers()
      this.bindEvents()
      this.showTeamSection()
      this.announceToScreenReader("Team members loaded successfully")
    } catch (error) {
      console.error("Failed to initialize team showcase:", error)
      this.showError()
      this.announceToScreenReader("Failed to load team members")
    }
  }

  /**
   * Load team data (simulates API call with local data)
   */
  async loadTeamData() {
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Load departments
    this.state.departments = [{ id: 0, name: "All Departments", slug: "all" }, ...this.teamData.departments]

    // Load team members
    this.state.teamMembers = [...this.teamData.members]
    this.filterAndPaginateMembers()
  }

  /**
   * Filter and paginate team members
   */
  filterAndPaginateMembers() {
    let filtered = [...this.state.teamMembers]

    // Filter by department
    if (this.state.selectedDepartment !== "all") {
      filtered = filtered.filter((member) => member.departmentSlug === this.state.selectedDepartment)
    }

    // Filter by search query
    if (this.state.searchQuery.trim()) {
      const query = this.state.searchQuery.toLowerCase()
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(query) ||
          member.jobTitle.toLowerCase().includes(query) ||
          (member.bio && member.bio.toLowerCase().includes(query)),
      )
    }

    this.state.filteredMembers = filtered
    this.state.totalPages = Math.ceil(filtered.length / this.config.itemsPerPage)

    // Reset to first page if current page is out of bounds
    if (this.state.currentPage > this.state.totalPages) {
      this.state.currentPage = 1
    }
  }

  /**
   * Get current page members
   */
  getCurrentPageMembers() {
    const startIndex = (this.state.currentPage - 1) * this.config.itemsPerPage
    const endIndex = startIndex + this.config.itemsPerPage
    return this.state.filteredMembers.slice(startIndex, endIndex)
  }

  /**
   * Render departments in select dropdown
   */
  renderDepartments() {
    this.elements.departmentSelect.innerHTML = ""

    this.state.departments.forEach((department) => {
      const option = document.createElement("option")
      option.value = department.slug
      option.textContent = department.name
      option.selected = department.slug === this.state.selectedDepartment
      this.elements.departmentSelect.appendChild(option)
    })
  }

  /**
   * Render team members
   */
  renderTeamMembers() {
    const currentMembers = this.getCurrentPageMembers()

    // Update results count
    this.updateResultsCount()

    // Show/hide no results
    if (this.state.filteredMembers.length === 0) {
      this.elements.teamGrid.style.display = "none"
      this.elements.noResults.style.display = "block"
      this.elements.pagination.style.display = "none"
      return
    }

    this.elements.noResults.style.display = "none"
    this.elements.teamGrid.style.display = "grid"

    // Render team members
    this.elements.teamGrid.innerHTML = ""

    currentMembers.forEach((member, index) => {
      const memberElement = this.createMemberElement(member, index)
      this.elements.teamGrid.appendChild(memberElement)
    })

    // Render pagination
    this.renderPagination()
  }

  /**
   * Create a team member element
   */
  createMemberElement(member, index) {
    const article = document.createElement("article")
    article.className = "team-member"
    article.setAttribute("role", "listitem")
    article.setAttribute("aria-labelledby", `member-name-${member.id}`)

    // Create member photo
    const avatarDiv = document.createElement("div")
    avatarDiv.className = "member-avatar"

    const photo = document.createElement("img")
    photo.className = "member-photo"
    photo.src = member.photo
    photo.alt = `${member.name}, ${member.jobTitle}`
    photo.loading = "lazy"
    photo.onerror = () => {
      photo.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjFGNUY5Ii8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNDUiIHI9IjIwIiBmaWxsPSIjOTRBM0I4Ii8+CjxwYXRoIGQ9Ik0yMCA5NUMyMCA4MCAzNS44IDY4IDU1IDY4SDY1Qzg0LjIgNjggMTAwIDgwIDEwMCA5NVYxMDBIMjBWOTVaIiBmaWxsPSIjOTRBM0I4Ii8+Cjwvc3ZnPgo="
      photo.alt = `${member.name} - Photo not available`
    }

    avatarDiv.appendChild(photo)

    // Create member info
    const name = document.createElement("h3")
    name.className = "member-name"
    name.id = `member-name-${member.id}`
    name.textContent = member.name

    const title = document.createElement("p")
    title.className = "member-title"
    title.textContent = member.jobTitle

    // Department badge
    let departmentElement = ""
    if (member.department) {
      const department = document.createElement("span")
      department.className = "member-department"
      department.textContent = member.department
      departmentElement = department
    }

    // Bio
    let bioElement = ""
    if (member.bio) {
      const bio = document.createElement("p")
      bio.className = "member-bio"
      bio.textContent = member.bio
      bioElement = bio
    }

    // Social links
    const socialDiv = document.createElement("div")
    socialDiv.className = "member-social"
    socialDiv.setAttribute("aria-label", `${member.name}'s contact information`)

    // LinkedIn
    if (member.socialLinks.linkedin) {
      const linkedinLink = this.createSocialLink(
        member.socialLinks.linkedin,
        "linkedin",
        `${member.name}'s LinkedIn profile`,
        this.getLinkedInIcon(),
      )
      socialDiv.appendChild(linkedinLink)
    }

    // Twitter
    if (member.socialLinks.twitter) {
      const twitterLink = this.createSocialLink(
        member.socialLinks.twitter,
        "twitter",
        `${member.name}'s Twitter profile`,
        this.getTwitterIcon(),
      )
      socialDiv.appendChild(twitterLink)
    }

    // Email
    if (member.contact && member.contact.email) {
      const emailLink = this.createSocialLink(
        `mailto:${member.contact.email}`,
        "email",
        `Email ${member.name}`,
        this.getEmailIcon(),
      )
      socialDiv.appendChild(emailLink)
    }

    // Phone
    if (member.contact && member.contact.phone) {
      const phoneLink = this.createSocialLink(
        `tel:${member.contact.phone}`,
        "phone",
        `Call ${member.name}`,
        this.getPhoneIcon(),
      )
      socialDiv.appendChild(phoneLink)
    }

    // Assemble the article
    article.appendChild(avatarDiv)
    article.appendChild(name)
    article.appendChild(title)

    if (departmentElement) {
      article.appendChild(departmentElement)
    }

    if (bioElement) {
      article.appendChild(bioElement)
    }

    if (socialDiv.children.length > 0) {
      article.appendChild(socialDiv)
    }

    return article
  }

  /**
   * Create a social link element
   */
  createSocialLink(href, platform, ariaLabel, icon) {
    const link = document.createElement("a")
    link.className = "social-link"
    link.href = href
    link.setAttribute("data-platform", platform)
    link.setAttribute("aria-label", ariaLabel)
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    link.innerHTML = icon

    return link
  }

  /**
   * Update results count
   */
  updateResultsCount() {
    const currentMembers = this.getCurrentPageMembers()
    const total = this.state.filteredMembers.length

    if (total === 0) {
      this.elements.resultsCount.textContent = "No team members found"
    } else {
      this.elements.resultsCount.textContent = `Showing ${currentMembers.length} of ${total} team member${total !== 1 ? "s" : ""}`
    }
  }

  /**
   * Render pagination
   */
  renderPagination() {
    if (this.state.totalPages <= 1) {
      this.elements.pagination.style.display = "none"
      return
    }

    this.elements.pagination.style.display = "flex"

    // Update prev/next buttons
    this.elements.prevButton.disabled = this.state.currentPage === 1
    this.elements.nextButton.disabled = this.state.currentPage === this.state.totalPages

    // Render page numbers
    this.elements.pageNumbers.innerHTML = ""

    const maxVisiblePages = 5
    let startPage = Math.max(1, this.state.currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(this.state.totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // First page + ellipsis
    if (startPage > 1) {
      this.elements.pageNumbers.appendChild(this.createPageButton(1))
      if (startPage > 2) {
        this.elements.pageNumbers.appendChild(this.createEllipsis())
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      this.elements.pageNumbers.appendChild(this.createPageButton(i))
    }

    // Ellipsis + last page
    if (endPage < this.state.totalPages) {
      if (endPage < this.state.totalPages - 1) {
        this.elements.pageNumbers.appendChild(this.createEllipsis())
      }
      this.elements.pageNumbers.appendChild(this.createPageButton(this.state.totalPages))
    }
  }

  /**
   * Create a page button
   */
  createPageButton(pageNumber) {
    const button = document.createElement("button")
    button.className = "page-button"
    button.textContent = pageNumber
    button.setAttribute("aria-label", `Go to page ${pageNumber}`)
    button.setAttribute("aria-current", pageNumber === this.state.currentPage ? "page" : "false")

    if (pageNumber === this.state.currentPage) {
      button.classList.add("active")
    }

    button.addEventListener("click", () => {
      this.goToPage(pageNumber)
    })

    return button
  }

  /**
   * Create ellipsis element
   */
  createEllipsis() {
    const span = document.createElement("span")
    span.className = "page-ellipsis"
    span.textContent = "..."
    span.setAttribute("aria-hidden", "true")
    return span
  }

  /**
   * Go to specific page
   */
  goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= this.state.totalPages && pageNumber !== this.state.currentPage) {
      this.state.currentPage = pageNumber
      this.renderTeamMembers()
      this.scrollToTop()
      this.announceToScreenReader(`Showing page ${pageNumber} of ${this.state.totalPages}`)
    }
  }

  /**
   * Handle search input
   */
  async handleSearch() {
    const query = this.elements.searchInput.value.trim()

    if (query !== this.state.searchQuery) {
      this.state.searchQuery = query
      this.state.currentPage = 1

      // Show loading briefly for better UX
      this.showLoading()
      await new Promise((resolve) => setTimeout(resolve, 200))

      this.filterAndPaginateMembers()
      this.renderTeamMembers()
      this.showTeamSection()

      const resultText =
        this.state.filteredMembers.length === 0
          ? "No results found"
          : `Found ${this.state.filteredMembers.length} team member${this.state.filteredMembers.length !== 1 ? "s" : ""}`
      this.announceToScreenReader(resultText)
    }
  }

  /**
   * Handle department filter change
   */
  async handleDepartmentChange() {
    const selectedDepartment = this.elements.departmentSelect.value

    if (selectedDepartment !== this.state.selectedDepartment) {
      this.state.selectedDepartment = selectedDepartment
      this.state.currentPage = 1

      // Show loading briefly for better UX
      this.showLoading()
      await new Promise((resolve) => setTimeout(resolve, 200))

      this.filterAndPaginateMembers()
      this.renderTeamMembers()
      this.showTeamSection()

      const departmentName =
        this.state.departments.find((d) => d.slug === selectedDepartment)?.name || "All Departments"
      this.announceToScreenReader(`Filtered by ${departmentName}`)
    }
  }

  /**
   * Bind event listeners
   */
  bindEvents() {
    // Search input
    this.elements.searchInput.addEventListener("input", this.debouncedSearch)

    // Department filter
    this.elements.departmentSelect.addEventListener("change", () => {
      this.handleDepartmentChange()
    })

    // Pagination
    this.elements.prevButton.addEventListener("click", () => {
      this.goToPage(this.state.currentPage - 1)
    })

    this.elements.nextButton.addEventListener("click", () => {
      this.goToPage(this.state.currentPage + 1)
    })

    // Keyboard navigation for pagination
    this.elements.pagination.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" && !this.elements.prevButton.disabled) {
        e.preventDefault()
        this.goToPage(this.state.currentPage - 1)
      } else if (e.key === "ArrowRight" && !this.elements.nextButton.disabled) {
        e.preventDefault()
        this.goToPage(this.state.currentPage + 1)
      }
    })
  }

  /**
   * Show loading state
   */
  showLoading() {
    this.state.isLoading = true
    this.elements.loadingState.style.display = "block"
    this.elements.errorState.style.display = "none"
    this.elements.teamSection.style.display = "none"
  }

  /**
   * Show error state
   */
  showError() {
    this.state.hasError = true
    this.state.isLoading = false
    this.elements.loadingState.style.display = "none"
    this.elements.errorState.style.display = "block"
    this.elements.teamSection.style.display = "none"
  }

  /**
   * Show team section
   */
  showTeamSection() {
    this.state.isLoading = false
    this.state.hasError = false
    this.elements.loadingState.style.display = "none"
    this.elements.errorState.style.display = "none"
    this.elements.teamSection.style.display = "block"
  }

  /**
   * Scroll to top of team section
   */
  scrollToTop() {
    this.elements.teamSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  /**
   * Announce to screen readers
   */
  announceToScreenReader(message) {
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "visually-hidden"
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }

  /**
   * Debounce function
   */
  debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  /**
   * SVG Icons
   */
  getLinkedInIcon() {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
        </svg>`
  }

  getTwitterIcon() {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>`
  }

  getEmailIcon() {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>`
  }

  getPhoneIcon() {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>`
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.teamShowcase = new TeamShowcase()
})

// Handle browser back/forward navigation
window.addEventListener("popstate", () => {
  if (window.teamShowcase) {
    window.teamShowcase.init()
  }
})
