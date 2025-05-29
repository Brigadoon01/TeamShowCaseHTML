
# Team Showcase – Semantic HTML + CSS + JavaScript Implementation

A fully accessible, responsive team showcase that consumes data from the **WordPress Team Showcase** plugin via REST API. Built with **semantic HTML**, **modern CSS**, and **vanilla JavaScript** following **web accessibility best practices**.



---

## Features

### Accessibility First
- **WCAG 2.1 AA Compliant**
- **Screen Reader Optimized**
- **Keyboard Navigation**
- **Focus Management**
- **ARIA Attributes**
- **High Contrast Support**
- **Rduced Motion Support**

### Responsive Design
- **Mobile-First Approach**
- **Fluid Typography**
- **Touch-Friendly (44px targets)**
- **CSS Grid & Flexbox**
- **Print Styles Supported**

### Performance Optimized
- **Lazy Loading**
- **Debounced Search**
- **Minimal Dependencies**
- **Semantic HTML**
- **Progressive Enhancement**
- **LCP**: 2.21s, **CLS**: 0.01, **INP**: 24ms

### WordPress Integration
- **REST API Consumption**
- **Real-time Search**
- **Department Filtering**
- **Pagination**
- **Graceful Error Handling**

---

## Project Structure

```bash
team-showcase-html/
├── index.html              # Main HTML file
├── styles.css              # Complete CSS styles
├── script.js               # JavaScript functionality
├── README.md               # This documentation
└── assets/
    └── images/
        └── placeholder.svg # Fallback team member image
```

---

## Quick Start

### Prerequisites
1. WordPress site with **Team Showcase Plugin** installed
2. A web server (local or remote)
3. Modern browser with JavaScript enabled

### 1. Download Files

```bash
git clone <repository-url>
cd team-showcase-html
```

### 2. Configure API Endpoint

In `script.js`, update your API base URL:

```javascript
this.config = {
  apiBaseUrl: 'https://your-wordpress-site.com/wp-json/team-showcase/v1',
  itemsPerPage: 6,
  debounceDelay: 300
};
```

### 3. Handle CORS (if needed)

In your WordPress theme's `functions.php`:

```php
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
```

### 4. Serve the Files

**Local options:**

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Or upload to your web host and access via your domain.

### 5. Test the Implementation

- Visit `http://localhost:8000`
- Ensure data loads
- Test search, filtering, and pagination

---

##  Configuration

### API Configuration (`script.js`)

```javascript
this.config = {
  apiBaseUrl: 'https://your-wordpress-site.com/wp-json/team-showcase/v1',
  itemsPerPage: 6,
  debounceDelay: 300
};
```

### Styling (`styles.css`)

Use CSS custom properties:

```css
:root {
  --color-primary: #3b82f6;
  --color-text: #1e293b;
  --color-text-muted: #64748b;
  --color-background: #ffffff;
  --color-border: #e2e8f0;

  --font-family: 'Inter', sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.6;

  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
}
```

---

## WordPress Plugin Integration

### Endpoints

#### `/members`
```http
GET /wp-json/team-showcase/v1/members
```

**Params:**
- `department`
- `search`
- `per_page`
- `page`

**Sample Response:**
```json
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
```

#### `/departments`
```http
GET /wp-json/team-showcase/v1/departments
```

```json
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
```

---

## Customization

### Color Theme

```css
:root {
  --color-primary: #10b981;
  --color-primary-hover: #059669;
}
```

### Layout Tweak

```css
.team-grid {
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
}
```

### Animation

```css
.team-member {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.team-member:hover {
  transform: translateY(-12px) scale(1.03);
}
```

---

## Advanced JS Customizations

### Custom Filters

```javascript
async fetchTeamMembers() {
  const params = new URLSearchParams({
    per_page: -1,
    skill: this.state.selectedSkill
  });
  // Fetch logic...
}
```

### Extended Search

```javascript
filterAndPaginateMembers() {
  if (this.state.searchQuery.trim()) {
    const query = this.state.searchQuery.toLowerCase();
    filtered = filtered.filter(member =>
      member.name.toLowerCase().includes(query) ||
      member.jobTitle.toLowerCase().includes(query) ||
      member.bio.toLowerCase().includes(query) ||
      member.department.toLowerCase().includes(query)
    );
  }
}
```

---

## API Testing

```bash
# Test members
curl https://your-site.com/wp-json/team-showcase/v1/members

# With search
curl "https://your-site.com/wp-json/team-showcase/v1/members?search=developer"

# With department filter
curl "https://your-site.com/wp-json/team-showcase/v1/members?department=engineering"
```

---

## Troubleshooting

### CORS Errors

**Solution:** Ensure CORS headers are set in WordPress (see installation step 3)

### 404 Error

**Check:**
- Plugin is activated
- Permalink structure is set
- REST API is enabled

### Empty Data

**Check:**
- Team members are published
- ACF fields are filled
- Featured images are set

### Image Issues

**Check:**
- URLs are correct
- Files are accessible
- Fallback image is used if needed

---

## Debug Mode

In `script.js`:

```javascript
constructor() {
  this.debug = true;
}

async fetchTeamMembers() {
  if (this.debug) {
    console.log('Fetching with params:', params.toString());
  }

  const response = await fetch(`${this.config.apiBaseUrl}/members?${params}`);

  if (this.debug) {
    console.log('Response:', await response.clone().json());
  }
}
```

---

## Deployment

### Checklist

- [ ] Use production API URL
- [ ] Remove debug logs
- [ ] Minify assets
- [ ] Validate accessibility (screen reader test)
- [ ] Responsive testing
- [ ] SEO & performance audit

### Hosting Options

- **Static Hosts**: Netlify, Vercel, GitHub Pages
- **Traditional Hosts**: cPanel, Plesk
- **Cloud/CDN**: Cloudflare, AWS CloudFront
- **Same server as WordPress** (recommended for seamless API access)

---

## Security Best Practices

- Encode input from search
- Escape injected content
- Use HTTPS for all API calls
- Apply rate-limiting on API if needed

---

## Contributing

1. Fork this repo
2. Create a feature branch
3. Make changes
4. Write tests (if applicable)
5. Submit a pull request

---

## License

MIT License – see the [LICENSE](LICENSE) file.

---

## Acknowledgments

- [WordPress Team Showcase Plugin](#)
- [WCAG Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Inter Font](https://rsms.me/inter/)
- [Feather Icons](https://feathericons.com/)
