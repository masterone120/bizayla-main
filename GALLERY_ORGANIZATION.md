# Gallery Organization Guide

## Overview

The gallery items in `public/locales/en.json` are organized by category for easy maintenance and future additions. Each category has a specific section in the JSON file.

## Category Structure

### 1. Export Technology & Global Trade (IDs: 1, 2, 10)

**Location in JSON:** Lines 548-560

- **Export Technology**: Advanced export solutions and technology
- **Global Trade**: International trade network and solutions
- **Combined**: Items that span both categories

**To add new items:**

- Place them after ID 10
- Use filterClasses: "export-technology" or "global-trade" or "export-technology global-trade"
- Follow the existing naming pattern

### 2. Packaging Design (IDs: 3, 12)

**Location in JSON:** Lines 561-570

- **Packaging Design**: Custom export packaging solutions
- **Combined**: Items that combine packaging with other categories

**To add new items:**

- Place them after ID 12
- Use filterClasses: "packaging-design" or "packaging-design [other-category]"
- Follow the existing naming pattern

### 3. Natural Salt (IDs: 4, 14-35)

**Location in JSON:** Lines 571-650

- **Natural Salt**: All salt-related gallery items
- Currently contains 22 salt images (salt(1).jpg to salt(22).jpg)

**To add new items:**

- Place them after ID 35
- Use filterClasses: "salt"
- Follow the existing naming pattern: "Uzbek Natural Salt Export"

### 4. Organic Food (IDs: 5, 11)

**Location in JSON:** Lines 651-660

- **Organic Food**: Premium organic products
- **Combined**: Items that combine organic food with other categories

**To add new items:**

- Place them after ID 11
- Use filterClasses: "organic-food" or "organic-food [other-category]"
- Follow the existing naming pattern

### 5. Dried Fruits (ID: 6)

**Location in JSON:** Lines 661-667

- **Dried Fruits**: Premium dried fruits products

**To add new items:**

- Place them after ID 6
- Use filterClasses: "dried-fruits"
- Follow the existing naming pattern

### 6. Dried Vegetables (ID: 7)

**Location in JSON:** Lines 668-674

- **Dried Vegetables**: Natural dried vegetables products

**To add new items:**

- Place them after ID 7
- Use filterClasses: "dried-vegetables"
- Follow the existing naming pattern

### 7. Nuts (ID: 8)

**Location in JSON:** Lines 675-681

- **Nuts**: Premium quality nuts products

**To add new items:**

- Place them after ID 8
- Use filterClasses: "nuts"
- Follow the existing naming pattern

### 8. Food Industry (ID: 9)

**Location in JSON:** Lines 682-688

- **Food Industry**: Food industry solutions and services

**To add new items:**

- Place them after ID 9
- Use filterClasses: "food-industry"
- Follow the existing naming pattern

## Adding New Items

### Step-by-Step Process:

1. **Choose the appropriate category section** in the JSON file
2. **Assign a unique ID** (continue the sequence from the last item in that category)
3. **Set the category name** (use existing category names for consistency)
4. **Create a descriptive title** (follow the existing naming pattern)
5. **Add the image path** (place images in appropriate folders)
6. **Set the alt text** (use the category name for consistency)
7. **Set filterClasses** (use the appropriate CSS class for filtering)

### Example New Item:

```json
{
  "id": "36",
  "category": "Natural Salt",
  "title": "Uzbek Natural Salt Export",
  "image": "/images/Gallery/Salt/salt(23).jpg",
  "alt": "Natural Salt",
  "filterClasses": "salt"
}
```

## Filter Classes Reference

| Category          | Filter Class        | Description                  |
| ----------------- | ------------------- | ---------------------------- |
| Export Technology | `export-technology` | Export technology solutions  |
| Global Trade      | `global-trade`      | International trade services |
| Packaging Design  | `packaging-design`  | Custom packaging solutions   |
| Natural Salt      | `salt`              | Salt products and exports    |
| Organic Food      | `organic-food`      | Organic food products        |
| Dried Fruits      | `dried-fruits`      | Dried fruits products        |
| Dried Vegetables  | `dried-vegetables`  | Dried vegetables products    |
| Nuts              | `nuts`              | Nuts products                |
| Food Industry     | `food-industry`     | Food industry solutions      |

## Image Organization

### Salt Images:

- **Location**: `/public/images/Gallery/Salt/`
- **Naming**: `salt(1).jpg` to `salt(22).jpg`
- **Next available**: `salt(23).jpg`

### Other Images:

- **Location**: `/public/images/inner-img/`
- **Naming**: `port_1.png`, `port_2.png`, etc.

## Maintenance Tips

1. **Keep IDs unique** across all categories
2. **Maintain consistent naming** within each category
3. **Use appropriate filter classes** for proper gallery filtering
4. **Place images in the correct folders** before adding to JSON
5. **Test the gallery filtering** after adding new items
6. **Update this documentation** when adding new categories

## Current Statistics

- **Total Items**: 35
- **Categories**: 8 main categories
- **Salt Images**: 22 items (largest category)
- **Other Categories**: 1-3 items each
- **Combined Categories**: 3 items with multiple filter classes
