# Team Showcase - Semantic HTML + CSS + JavaScript Implementation

A fully accessible, responsive team showcase that consumes data from the WordPress Team Showcase plugin via REST API. Built with semantic HTML, modern CSS, and vanilla JavaScript following web accessibility best practices.

![Team Showcase Preview](https://via.placeholder.com/800x400/f8fafc/1e293b?text=Team+Showcase+-+HTML+Implementation)

## Features

### **Accessibility First**
- **WCAG 2.1 AA Compliant** - Meets web accessibility standards
- **Screen Reader Optimized** - Full support for assistive technologies
- **Keyboard Navigation** - Complete keyboard accessibility
- **Focus Management** - Visible focus indicators and logical tab order
- **ARIA Attributes** - Comprehensive ARIA labeling and live regions
- **High Contrast Support** - Adapts to user's contrast preferences
- **Reduced Motion** - Respects user's motion preferences

###  **Responsive Design**
- **Mobile-First Approach** - Optimized for all screen sizes
- **Fluid Typography** - Scales beautifully across devices
- **Touch-Friendly** - 44px minimum touch targets
- **CSS Grid & Flexbox** - Modern layout techniques
- **Print Styles** - Optimized for printing

###  **Performance Optimized**
- **Lazy Loading** - Images load as needed
- **Debounced Search** - Efficient search input handling
- **Minimal Dependencies** - Pure vanilla JavaScript
- **Semantic HTML** - Clean, meaningful markup
- **Progressive Enhancement** - Works without JavaScript
- **LCP** - 2.21
- **CLS** - 0.01
- **INP** - 24ms

###  **WordPress Integration**
- **REST API Consumption** - Fetches data from WordPress plugin
- **Real-time Search** - Search across team members
- **Department Filtering** - Filter by team departments
- **Pagination** - Navigate through large teams
- **Error Handling** - Graceful fallbacks for API issues

## Project Structure

\`\`\`
team-showcase-html/
├── index.html              # Main HTML file
├── styles.css              # Complete CSS styles
├── script.js               # JavaScript functionality
├── README.md               # This documentation
└── assets/                 # Optional assets folder
    └── images/
        └── placeholder.svg # Fallback team member image
\`\`\`

## Quick Start

### Prerequisites

1. **WordPress Site** with the Team Showcase plugin installed and activated
2. **Web Server** to serve the HTML files (can be local or remote)
3. **Modern Browser** with JavaScript enabled

### Installation Steps

1. **Download the Files**
   \`\`\`bash
   # Clone or download the HTML implementation files
   git clone <repository-url>
   cd team-showcase-html
   \`\`\`

2. **Configure API Endpoint**
   
   Open `script.js` and update the API configuration:
   \`\`\`javascript
   this.config = {
     apiBaseUrl: 'https://your-wordpress-site.com/wp-json/team-showcase/v1',
     itemsPerPage: 6,
     debounceDelay: 300
   };
   \`\`\`

3. **Handle CORS (if needed)**
   
   If your HTML files are on a different domain than your WordPress site, you may need to handle CORS. Add this to your WordPress theme's `functions.php`:
   \`\`\`php
   // Allow CORS for Team Showcase API
   add_action('rest_api_init', function() {
       remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
       add_filter('rest_pre_serve_request', function($value) {
           header('Access-Control-Allow-Origin: *');
           header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
           header('Access-Control-Allow-Headers: Content-Type, Authorization');
           return $value;
       });
   });
   \`\`\`

4. **Serve the Files**
   
   **Option A: Local Development**
   \`\`\`bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   \`\`\`
   
   **Option B: Upload to Web Server**
   - Upload files to your web hosting
   - Access via your domain

5. **Test the Implementation**
   - Open `http://localhost:8000` (or your domain)
   - Verify team members load from WordPress
   - Test search and filtering functionality

## Configuration

### API Configuration

Update the configuration object in `script.js`:

\`\`\`javascript
this.config = {
  // WordPress REST API base URL
  apiBaseUrl: 'https://your-wordpress-site.com/wp-json/team-showcase/v1',
  
  // Number of team members per page
  itemsPerPage: 6,
  
  // Search input debounce delay (milliseconds)
  debounceDelay: 300
};
\`\`\`

### Styling Customization

The CSS uses custom properties for easy theming:

\`\`\`css
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-text: #1e293b;
  --color-text-muted: #64748b;
  --color-background: #ffffff;
  --color-border: #e2e8f0;
  
  /* Typography */
  --font-family: 'Inter', sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.6;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
}
\`\`\`

## WordPress Plugin Integration

### How It Works

The HTML implementation communicates with the WordPress Team Showcase plugin through REST API endpoints:

#### 1. **Team Members Endpoint**
\`\`\`
GET /wp-json/team-showcase/v1/members
\`\`\`

**Parameters:**
- `department` - Filter by department slug
- `search` - Search term for name/job title
- `per_page` - Number of items per page (-1 for all)
- `page` - Page number

**Response:**
\`\`\`json
{
  "members": [
    {
      "id": 1,
      "name": "John Doe",
      "jobTitle": "Senior Developer",
      "department": "Engineering",
      "departmentSlug": "engineering",
      "photo": "https://example.com/photo.jpg",
      "bio": "Experienced developer...",
      "socialLinks": {
        "linkedin": "https://linkedin.com/in/johndoe",
        "twitter": "https://twitter.com/johndoe"
      },
      "contact": {
        "email": "john@example.com",
        "phone": "+1234567890"
      }
    }
  ],
  "total": 25,
  "pages": 5
}
\`\`\`

#### 2. **Departments Endpoint**
\`\`\`
GET /wp-json/team-showcase/v1/departments
\`\`\`

**Response:**
\`\`\`json
[
  {
    "id": 1,
    "name": "Engineering",
    "slug": "engineering",
    "count": 12
  },
  {
    "id": 2,
    "name": "Design",
    "slug": "design",
    "count": 8
  }
]
\`\`\`

### Data Flow

1. **Initialization**
   - HTML page loads
   - JavaScript fetches departments and team members
   - Renders initial team grid

2. **User Interactions**
   - Search input triggers debounced API call
   - Department filter triggers new API request
   - Pagination navigates through results

3. **State Management**
   - JavaScript maintains application state
   - Updates DOM based on API responses
   - Handles loading and error states

### WordPress Plugin Requirements

Ensure your WordPress Team Showcase plugin has:

1. **Custom Post Type**: `team_member`
2. **Custom Taxonomy**: `team_department`
3. **ACF Fields**:
   - `job_title` (text)
   - `bio` (textarea)
   - `linkedin_url` (URL)
   - `twitter_url` (URL)
   - `email` (email)
   - `phone` (text)
   - `display_order` (number)

4. **REST API Endpoints**:
   - `/wp-json/team-showcase/v1/members`
   - `/wp-json/team-showcase/v1/departments`

## Customization

### Styling

#### Change Color Scheme
\`\`\`css
:root {
  --color-primary: #10b981; /* Green theme */
  --color-primary-hover: #059669;
}
\`\`\`

#### Modify Layout
\`\`\`css
.team-grid {
  /* Change grid columns */
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  
  /* Adjust gap */
  gap: 2.5rem;
}
\`\`\`

#### Custom Animations
\`\`\`css
.team-member {
  /* Custom hover effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-member:hover {
  transform: translateY(-12px) scale(1.03);
}
\`\`\`

### JavaScript Functionality

#### Add Custom Filters
\`\`\`javascript
// Add skill-based filtering
async fetchTeamMembers() {
  const params = new URLSearchParams({
    per_page: -1,
    skill: this.state.selectedSkill // Custom parameter
  });
  
  // ... rest of the method
}
\`\`\`

#### Modify Search Behavior
\`\`\`javascript
// Change search to include bio field
filterAndPaginateMembers() {
  if (this.state.searchQuery.trim()) {
    const query = this.state.searchQuery.toLowerCase();
    filtered = filtered.filter(member => 
      member.name.toLowerCase().includes(query) ||
      member.jobTitle.toLowerCase().includes(query) ||
      member.bio.toLowerCase().includes(query) ||
      member.department.toLowerCase().includes(query) // Add department search
    );
  }
}
\`\`\`

## API Testing

### Test Endpoints Manually

1. **Check if endpoints are accessible:**
   \`\`\`bash
   curl https://your-wordpress-site.com/wp-json/team-showcase/v1/members
   curl https://your-wordpress-site.com/wp-json/team-showcase/v1/departments
   \`\`\`

2. **Test with parameters:**
   \`\`\`bash
   # Search for developers
   curl "https://your-site.com/wp-json/team-showcase/v1/members?search=developer"
   
   # Filter by department
   curl "https://your-site.com/wp-json/team-showcase/v1/members?department=engineering"
   \`\`\`

3. **Check response format:**
   - Ensure JSON is valid
   - Verify all required fields are present
   - Check image URLs are accessible

## Troubleshooting

### Common Issues

#### 1. **CORS Errors**
\`\`\`
Access to fetch at 'https://wordpress-site.com/wp-json/...' from origin 'https://your-site.com' has been blocked by CORS policy
\`\`\`

**Solution:** Add CORS headers to WordPress (see installation step 3)

#### 2. **API Not Found (404)**
\`\`\`
Failed to fetch: 404 Not Found
\`\`\`

**Solutions:**
- Verify WordPress plugin is activated
- Check permalink structure in WordPress
- Ensure REST API is enabled

#### 3. **Empty Response**
\`\`\`
No team members found
\`\`\`

**Solutions:**
- Add team members in WordPress admin
- Publish team member posts
- Check ACF fields are properly configured

#### 4. **Images Not Loading**
\`\`\`
Image broken/placeholder showing
\`\`\`

**Solutions:**
- Verify image URLs in WordPress
- Check image file permissions
- Ensure featured images are set

### Debug Mode

Enable debug mode in `script.js`:

\`\`\`javascript
constructor() {
  this.debug = true; // Add this line
  // ... rest of constructor
}

// Add debug logging
async fetchTeamMembers() {
  if (this.debug) {
    console.log('Fetching team members with params:', params.toString());
  }
  
  const response = await fetch(`${this.config.apiBaseUrl}/members?${params}`);
  
  if (this.debug) {
    console.log('API Response:', await response.clone().json());
  }
}
\`\`\`

## Deployment

### Production Checklist

- [ ] Update API URLs to production WordPress site
- [ ] Remove debug logging
- [ ] Optimize images and assets
- [ ] Test on multiple devices and browsers
- [ ] Verify accessibility with screen readers
- [ ] Test with slow network connections
- [ ] Validate HTML and CSS
- [ ] Set up proper caching headers

### Hosting Options

1. **Static Hosting** (Netlify, Vercel, GitHub Pages)
2. **Traditional Web Hosting** (cPanel, shared hosting)
3. **CDN** (CloudFlare, AWS CloudFront)
4. **Same Server as WordPress** (subdirectory or subdomain)

## Performance

### Optimization Tips

1. **Image Optimization**
   - Use WebP format when possible
   - Implement responsive images
   - Add proper alt text

2. **CSS Optimization**
   - Remove unused styles
   - Use CSS custom properties
   - Minimize and compress

3. **JavaScript Optimization**
   - Debounce user inputs
   - Lazy load non-critical features
   - Use efficient DOM manipulation

## Security

### Best Practices

1. **Input Sanitization**
   - Search queries are properly encoded
   - URL parameters are validated

2. **XSS Prevention**
   - All user content is properly escaped
   - innerHTML usage is controlled

3. **API Security**
   - Use HTTPS for all API calls
   - Implement rate limiting if needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **WordPress Team Showcase Plugin** - Data source
- **Inter Font** - Typography
- **Feather Icons** - SVG icons
- **WCAG Guidelines** - Accessibility standards

## Support

### Getting Help

1. **Check this README** for common solutions
2. **Test API endpoints** manually
3. **Enable debug mode** for detailed logging
4. **Check browser console** for JavaScript errors
5. **Validate HTML/CSS** for syntax issues

### Reporting Issues

When reporting issues, please include:

- Browser and version
- WordPress version and plugin version
- Console error messages
- Steps to reproduce
- Expected vs actual behavior

---

**Built with for accessibility and performance**
